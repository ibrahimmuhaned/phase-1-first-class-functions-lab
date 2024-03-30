// Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create fare multiplier
const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

// Fare doubler function
const fareDoubler = createFareMultiplier(2);

// Fare tripler function
const fareTripler = createFareMultiplier(3);

// Select different drivers based on function provided
const selectDifferentDrivers = function(drivers, func) {
  return func(drivers);
};

module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
