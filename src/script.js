//"use strict";

let isSmallmenuOpen = false;

function openSmallmenu() {
  if(!isSmallmenuOpen) {
    document.getElementById("smallmenu").classList.toggle("show-smallmenu");
    isSmallmenuOpen = true;
  }
}

function closeSmallmenu() {
  if(isSmallmenuOpen) {
    document.getElementById("smallmenu").classList.toggle("show-smallmenu");
    isSmallmenuOpen = false;
  }
}

function contactUsbtn() {
  let answer = confirm("Thank You for your Interest. Would you like to proceed?");

  if(answer) {
      alert("Thank You");
  } else {
      alert("Another Time.  Thank You for Visiting.");
    }

}
