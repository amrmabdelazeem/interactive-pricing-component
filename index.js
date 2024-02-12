const sliderEl = document.getElementById("slider");
const subscriberEl = document.getElementById("subscribers");
const subscribtionEl = document.getElementById("subscribtion");
const toggleEl = document.getElementById("toggle");
var isChecked = false;
var currentSliderValue = sliderEl.value;

toggleEl.addEventListener("change", (e) => {
  isChecked = e.target.checked;
  switchBilling(isChecked, currentSliderValue);
});

sliderEl.addEventListener("input", (e) => {
  currentSliderValue = e.target.value;
  switchBilling(isChecked, currentSliderValue);

  const progress = (currentSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #eaeefb ${progress}%)`;
});

function switchBilling(checkState, sliderValue) {
  switch (sliderValue) {
    case "0":
      subscriberEl.textContent = "10K";
      checkState
        ? (subscribtionEl.textContent = "$72.00")
        : (subscribtionEl.textContent = "$8.00 ");
      break;
    case "25":
      subscriberEl.textContent = "50K";
      checkState
        ? (subscribtionEl.textContent = "$108.00")
        : (subscribtionEl.textContent = "$12.00 ");
      break;
    case "50":
      subscriberEl.textContent = "100K";
      checkState
        ? (subscribtionEl.textContent = "$144.00")
        : (subscribtionEl.textContent = "$16.00 ");
      break;
    case "75":
      subscriberEl.textContent = "500K";
      checkState
        ? (subscribtionEl.textContent = "$216.00")
        : (subscribtionEl.textContent = "$24.00 ");
      break;
    case "100":
      subscriberEl.textContent = "1M";
      checkState
        ? (subscribtionEl.textContent = "$324.00")
        : (subscribtionEl.textContent = "$36.00 ");
      break;

    default:
      subscriberEl.textContent = "100K";
      checkState
        ? (subscribtionEl.textContent = "$144.00")
        : (subscribtionEl.textContent = "$8.00 ");
  }
}
