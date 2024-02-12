const sliderEl = document.getElementById("slider");

function progressScript() {
  const sliderValue = sliderEl.value;
  sliderEl.style.background = `linear-gradient(to right, #a5f3eb ${sliderValue}%, #eaeefb ${sliderValue}%)`;
}

progressScript();
