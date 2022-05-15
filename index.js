const yearstamps = [1200, 1224, 1227, 1240, 1260];
const khans = ["Genghis", "lol", "test"];
var khanyears = {}
const yearstart = 1200;
const slider = document.getElementById("slider");
const year = document.getElementById("year");
const info = document.getElementById("info");
const timer = ms => new Promise(res => setTimeout(res, ms))
window.canfunc = "1";
window.slideon = 0;

//genghis
for (var i = 1200; i <= 1220; i++) {
  khanyears[i] = 0;
}
//2
for (var i = 1221; i <= 1240; i++) {
  khanyears[i] = 1;
}
//3
for (var i = 1241; i <= 1272; i++) {
  khanyears[i] = 2;
}
console.log(khanyears);



addEventListener('keydown', slide);

function change(img) {
    var x = "";
    year.textContent = img;
    info.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Great Khan: " + khans[khanyears[img]] + " Khan";
    img = parseInt(img) - yearstart;
  
    var img = "img/Mongol_Empire-" + x + img + ".png";
    document.getElementById("image").src = img;
    console.log(img);
}

async function slide(key) {
  if (window.canfunc == "0") {;
    return
  }
  window.canfunc = "0";
  console.log(key.code);
  if (key.code == "KeyT") {
    slider.stepUp();
    change(slider.value);
  }
  if (key.code == "KeyR") {
    slider.stepDown();
    change(slider.value);
  }
  if (key.code == "ArrowRight" && yearstamps[window.slideon + 1] != undefined) {
    for (let i=slider.value; i<yearstamps[window.slideon + 1] + 1; i++) {
      slider.stepUp();
      console.log("next")
      change(i);
      await timer(50)
   }
   window.slideon++;


  }
  if (key.code == "ArrowLeft" && yearstamps[window.slideon - 1] != undefined) {
    for (let i=slider.value; i>yearstamps[window.slideon - 1] - 1; i--) {
      slider.stepDown();
      console.log("next")
      change(i);
      await timer(50)
   }
   window.slideon--;
  }
  window.canfunc = "1";
}



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

  console.log("SliderInput:" + this.value);
  change(this.value); 
}
