var _ = require('lodash');
const request = require('request');

//------------------------------------------------------------
//configurations

//District ID - District in which you are looking for vaccine. 
//Example: 363 is code for Pune(Maharashtra).
//District ID can be easily obtained from COWIN website 
const DISTRICT_ID = 363;

//Date - Date for which the system will check vaccine availability
//Format = DD-MM-YYYY
const DATE = '01-06-2021';

//VACCINE - Vaccine type to look for
//Valid values (any one): COVISHIELD or COVAXIN 
const VACCINE = 'COVISHIELD';

//AGE - Age group for which to look for vaccines
//Valid values (any one): 18 or 45
const AGE = 18;

//DOSE - For first dose value should be 1, for second dose value should be 2 
const DOSE = 1;

//--------------------------------------------------------------------

const COWIN_URL = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=" + DISTRICT_ID + '&date=' + DATE;

const DOSE_AVAILABILITY_KEY = 'available_capacity_dose' + DOSE;

//interval after which data should be polled
const PING_INTERVAL = 5000;

function logSearchInfo() {
    console.log("Looking for: " + VACCINE);
    console.log("Date: " + DATE);
    console.log("DISTRICT ID: " + DISTRICT_ID);
    console.log("Dose: " + (DOSE == 1 ? "First" : "Second"));
    console.log("--------------------------------------------");
    console.log("");
}

function searchVaccine(error, response, body) {
    if (response.statusCode == 200) {
        let hostpitalData = JSON.parse(body);
        if (hostpitalData['centers']) {
            let centersData = hostpitalData['centers'];
            console.log("Total Centers Providing Vaccination: " + centersData.length)
            let filteredCenters = _.filter(centersData, function (o) {
                let sessionData = o['sessions'];
                let matched = false;
                sessionData.forEach(element => {
                    if (element['min_age_limit'] == AGE && element['vaccine'] == VACCINE && element[DOSE_AVAILABILITY_KEY] > 0)
                        matched = true;
                });
                return matched;
            });
            if (filteredCenters.length > 0) {
                console.log("Vaccine available at: ");
                filteredCenters.forEach(center => {
                    console.log("--------------------------");
                    console.log('Name: ' + center['name']);
                    console.log('Pincode: ' + center['pincode']);
                    console.log('Address: ' + center['address']);
                    let sessionData = center['sessions'];
                    sessionData.forEach(session => {
                        if (session['min_age_limit'] == 18 && session['vaccine'] == 'COVISHIELD' && session[DOSE_AVAILABILITY_KEY] > 0) {
                            console.log("Available vaccine count: " + session[DOSE_AVAILABILITY_KEY]);
                        }
                    })
                })
                beep();
            } else {
                console.log("No slots available currently!");
            }
        } else {
            console.log("Not able to fetch data");
            beep();
        }
    } else {
        console.log("Authentication Error!!");
        beep();
    }
}

function beep() {
    console.log('\u0007');
}

setInterval(() => {
    console.clear();
    logSearchInfo();
    request(COWIN_URL, searchVaccine)
}, PING_INTERVAL);