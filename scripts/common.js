// Get the modal
var modal = document.getElementById("popup-mod");

// Get the button that opens the modal
var btn = document.getElementById("sign-up-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openPop() {
  modal.style.visibility = "visible";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
