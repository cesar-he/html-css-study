let count = 1;
let intervalId;
document.getElementById("radio1").checked = true;

function onRadioClick(clickedIndex) {
  clearInterval(intervalId);

  count = clickedIndex;

  intervalId = setInterval(nextImage, 5000);
}

intervalId = setInterval(nextImage, 5000);

function nextImage() {
  count++;
  if (count > 10) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
