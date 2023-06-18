//a

var nameOfTheSpace = "Determination";
var shuttleSpeed = 17500;
var distanceToMars = 225000000;
var DistanceToTheMoon = 384400;
var milesPerKilometer = 0.621

//B

console.log(typeof nameOfTheSpace);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof DistanceToTheMoon);
console.log(typeof milesPerKilometer);

//C

var milesToMars = distanceToMars * milesPerKilometer;
console.log(milesToMars);

var hoursToMars = milesToMars / shuttleSpeed;
console.log(hoursToMars);

var daysToMars = hoursToMars / 24;
console.log(daysToMars);

//D

console.log(nameOfTheSpace + " will take" + daysToMars + " days to reach Mars")

//E

var milesToMoon = DistanceToTheMoon * milesPerKilometer;
console.log(milesToMoon);

var hoursToMoon = milesToMoon / shuttleSpeed;
console.log(hoursToMoon);

var daysToMoon = hoursToMoon /24;
console.log(daysToMoon);

console.log(nameOfTheSpace + " will take" + daysToMoon + " days to reach the moon.");
