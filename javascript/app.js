function updateTime(){

//New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format(
  "h:mm:ss[<small>]A[</small>]"
);

//Shenzhen
let shenzhenElement = document.querySelector("#shenzhen");
let shenzhenDateElement = shenzhenElement.querySelector(".date");
let shenzhenTimeElement = shenzhenElement.querySelector(".time");
let shenzhenTime = moment().tz("Hongkong");

shenzhenDateElement.innerHTML = shenzhenTime.format("MMMM Do YYYY");
shenzhenTimeElement.innerHTML = shenzhenTime.format(
  "h:mm:ss[<small>]A[</small>]"
);
}
updateTime();
setInterval(updateTime, 1000);