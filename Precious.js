//A

var engineIndicatorLight = "red blinking";
var spaceSuitsOn = true;
var shuttleCobinReady = true;
var crewStatus = 'spaceSuitsOn && shuttleCabinReady'
var computerStatusCode = 200
var shuttleSpeed = 15000

//B

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//C

if (crewStatus === true) {
  console.log("Crew Ready");
}else{
  console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
  console.log("Please stand by, Computer is rebooting.");
}else if(CompuerStatusCode === 200) {
  console.log("Success! Computer online.");
}else {
  console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached");
}else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot mintain orbit.");
}else{
  console.log("stable speed");
}

//D

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

//E


var fuelLevel = 28000;
var engineTemperature = 2500;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight){
console.log("ENGINE FAILURE IMINENT");
}else if (fuelLevel <= 5000 || engineTemperature > 2500){
  console.log("Check fuel level.  Engine running hot");
}else if(fuelLevel > 5000 && engineTemperature <= 2500){
  console.log("fuel level above 25%. Engine good.");
}else if(fuelLevel > 10000 && engineTemperature <= 2500){
  console.log("fuel level above 50%. Engines good.");
}else if(fuelLevel > 20000 && engineTemperature <= 2500){
  console.log("Full tank. Engines good.");
}else{
  console.log("Fuel and enging status pending....");
}

//6

var commandOveride = true

if (fuelLevel > 20000 && !engineIndicatorLight != "redblinking" || commandOveride = true ){
  console.log("Cleared to launch!");
}else{
  console.log("Launch scrubbed")
}








