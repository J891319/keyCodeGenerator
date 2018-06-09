var keycodeDisplay = document.getElementById('keycode');

window.addEventListener("keydown", function(e) {
  keycodeDisplay.innerHTML= e.keyCode;
});

