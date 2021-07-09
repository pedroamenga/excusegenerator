/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog ", "my granma ", "his turtle ", "my bird "];
  let random_who = Math.floor(Math.random() * who.length);

  let what = ["ate ", "pissed ", "crushed ", "broke "];
  let random_what = Math.floor(Math.random() * what.length);

  let when = [
    "before the class",
    "right in time",
    "whewn i finished",
    "during lunch"
  ];
  let random_when = Math.floor(Math.random() * when.length);

  let result =
    who[random_who] + "" + what[random_what] + "" + when[random_when];
  document.getElementById("excuse").innerHTML = result;
};
