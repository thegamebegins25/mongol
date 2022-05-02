const yearstamps = [1196, 1224, 1227, 1240, 1260];
const yearstart = 1196;
const slider = document.getElementById("slider");
const year = document.getElementById("year");
const timer = ms => new Promise(res => setTimeout(res, ms))
window.slideon = 0;



addEventListener('keydown', slide);

function change(img) {
    var x = "";
    year.textContent = img;

    img = parseInt(img) - yearstart;
    if (img < 100 && img > 9) {
      x = "0";
    }
    if (img < 10) {
      x = "00";
    }
    var img = "img/" + x + img + ".jpg";
    document.getElementById("image").src = img;
    console.log(img);
}

async function slide(key) {
  console.log(key.code);
  if (key.code == "ArrowRight") {
    for (let i=slider.value; i<yearstamps[window.slideon + 1] + 1; i++) {
      slider.stepUp();
      console.log("next")
      change(i);
      await timer(50)
   }
   window.slideon++;


  }
  if (key.code == "ArrowLeft") {
    for (let i=slider.value; i>yearstamps[window.slideon - 1]; i--) {
      slider.stepDown();
      console.log("next")
      change(i);
      await timer(50)
   }
   window.slideon--;
  }
}



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log("SliderInput:" + this.value);
  change(this.value); 
}
