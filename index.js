const sliderEl = document.getElementById("slider");
const subscriberEl = document.getElementById("subscribers");
const subscribtionEl = document.getElementById("subscribtion"); 



sliderEl.addEventListener("input", (e)=>{
  const currentSliderValue = e.target.value;

  switch(currentSliderValue){
    case "0":
        subscriberEl.textContent = "10K";
        subscribtionEl.textContent = "$8.00 "
        break;
    case "25":
        subscriberEl.textContent = "50K";
        subscribtionEl.textContent = "$12.00 "
        break;
    case "50":
        subscriberEl.textContent = "100K";
        subscribtionEl.textContent = "$16.00 "
        break;
    case "75":
        subscriberEl.textContent = "500K";
        subscribtionEl.textContent = "$24.00 "
        break;
    case "100":
        subscriberEl.textContent = "1M"
        subscribtionEl.textContent = "$36.00 "
        break;

    default:
        subscriberEl.textContent = "100K"
        subscribtionEl.textContent = "$8.00 "
  }


  const progress = (currentSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, #a5f3eb ${progress}%, #eaeefb ${progress}%)`;
})

