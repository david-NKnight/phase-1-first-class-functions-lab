// Code your solution in this file!
const returnFirstTwoDrivers= function (drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const doubleFare = createFareMultiplier(2);
console.log(doubleFare(10));

const fareDoubler = createFareMultiplier(2);
fareDoubler(10);

const fareTripler = createFareMultiplier(3);

const fare = 10;
const tripledFare = fareTripler(fare);

function selectDifferentDrivers(driversArray, selectFunction) {
  return selectFunction(driversArray);
}

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);