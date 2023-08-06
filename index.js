const returnFirstTwoDrivers = function (drivers=[]){
    const newDrivers =[]
    for (let i=0; i<2; i++)
        newDrivers [i] = drivers [i];
    return newDrivers
}

const returnLastTwoDrivers = function (drivers=[]){
    const newDrivers=[];
    let j = 1.
    for (let i=drivers.length-1 ; i>drivers.length-3; i--)
        {newDrivers [j] = drivers [i];
        j--}
    return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
   return function (fare) {return a*fare;};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(drivers=[], returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
 }
