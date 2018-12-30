

export let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  maxSpeed: 1200,
  minSpeed: 300,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 },
 {name: 'SkyJet',
  maxSpeed: 800,
  minSpeed: 200,
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange : 700,
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
let range = maxSpeed - minSpeed; {if (range > requiredSpeedRange) {
    return true;
  } else {
    return false}}};

export function meetsStaffRequirements(availableStaff, requiredStaff) {if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false}
                                                               };          

//  Added new functions and variables and added export keyword to export immediatly upon declairation
