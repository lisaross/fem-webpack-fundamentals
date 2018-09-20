function buttonEvent() {
  var allButtons = document.getElementsByTagName("button");
  for (i = 0; i < allButtons.length; i++) {
    (function(index) {
      var buttonName = allButtons[index].name;
      allButtons[index].onclick = function() {
        mixpanel.track(`${buttonName} clicked`);
        console.log("I am button " + buttonName);
      };
    })(i);
  }
}

window.addEventListener("load", function() {
  buttonEvent();
});
