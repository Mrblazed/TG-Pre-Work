import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element)
                                      {console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity()

//  Continued to use import to pull data from an imported module
