// track user

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
  `mixpanel.track("button clicked webpack"); console.log("button clicked")`
);
document.body.appendChild(button);
document.body.appendChild(footer);

// mixpanel.init("daa345feecc0547d36874491c6a018c5");
