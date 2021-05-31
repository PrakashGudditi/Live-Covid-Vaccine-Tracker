# Live Covid Vaccine Tracker
A very simple script to check real time availability of COVID vaccine by querying the offical COWIN server.

It helped me book vaccination appointment.

It queries the COWIN servers every 5 seconds and displays on screen centers at which vaccination slots are available.

<br>

# Configuration

Simply change the variable values as per your need

##### DISTRICT_ID
- District in which you are looking for vaccine. 
- District ID can be easily obtained from COWIN website
- Example: 363 is code for Pune(Maharashtra).
- **const DISTRICT_ID = 363;**

##### DATE
- Date for which the system will check vaccine availability
- Format = DD-MM-YYYY
- **const DATE = '01-06-2021';**

##### VACCINE
- Vaccine type to look for
- Valid values (any one): COVISHIELD or COVAXIN 
- **const VACCINE = 'COVISHIELD';**

##### AGE
- Age group for which to look for vaccines
- Valid values (any one): 18 or 45
- **const AGE = 18;**

##### DOSE
- For first dose value should be 1, for second dose value should be 2 
- **const DOSE = 1;**

# RUN

1. Clone this repo
2. Run ***npm install*** to install required npm modules
3. ***node launch.js*** to run the script
4. Enjoy!





