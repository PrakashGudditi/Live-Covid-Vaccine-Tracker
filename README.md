# Live Covid Vaccine Tracker
A very simple script to check real time availability of COVID vaccine by querying the offical COWIN server.

It helped me book vaccination appointment.

It queries the COWIN servers every 5 seconds and displays on screen centers at which vaccination slots are available.

<br>

# Configuration

Simply change the variable values as per your need

> District ID - District in which you are looking for vaccine. 
<br>
> Example: 363 is code for Pune(Maharashtra).
<br>
> District ID can be easily obtained from COWIN website 
<br>
> **const DISTRICT_ID = 363;**

<br>

> Date - Date for which the system will check vaccine availability
<br>
> Format = DD-MM-YYYY
<br>
> **const DATE = '01-06-2021';**

<br>

> VACCINE - Vaccine type to look for
<br>
> Valid values (any one): COVISHIELD or COVAXIN 
<br>
const VACCINE = 'COVISHIELD';

<br>

> AGE - Age group for which to look for vaccines
<br>
>Valid values (any one): 18 or 45
<br>
> **const AGE = 18;**

<br>

> DOSE - For first dose value should be 1, for second 
<br>
> dose value should be 2 
<br>
> **const DOSE = 1;**

<br>

# RUN

1. Clone this repo
2. Run ***npm install*** to install required npm modules
3. ***node launch.js*** to run the script
4. Enjoy!





