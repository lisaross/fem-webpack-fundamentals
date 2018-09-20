// track user
import firebase from "./firebase";
import mixpanel from "./mixpanel";
import buttons from "./buttons-event";
import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from "./footer.css";

document.onload = console.log("page loaded");

const button = makeButton("Yay! a button!");
button.style = makeColorStyle("cyan");
button.setAttribute(
  "onclick",
  `mixpanel.track("button clicked firebase"); console.log("button clicked ${
    button.name
  }")`
);
document.getElementById("box").appendChild(button);
document.body.appendChild(footer);
