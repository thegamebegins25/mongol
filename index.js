const yearstamps = [1200, 1219, 1227, 1230, 1234, 1241, 1242, 1261, 1272];
const khans = ["Genghis", "&#214;godei", "Mongke", "Kublai"];
var khanyears = {}
const yearstart = 1200;
const slider = document.getElementById("slider");
const year = document.getElementById("year");
const info = document.getElementById("info");
const timer = ms => new Promise(res => setTimeout(res, ms))
window.canfunc = "1";
window.slideon = 0;

//genghis
for (var i = 1200; i <= 1227; i++) {
  khanyears[i] = 0;
}
//ogodei
for (var i = 1228; i <= 1242; i++) {
  khanyears[i] = 1;
}
//mongke
for (var i = 1243; i <= 1261; i++) {
  khanyears[i] = 2;
}
//kublai
for (var i = 1262; i <= 1272; i++) {
  khanyears[i] = 3;
}
console.log(khanyears);

addEventListener('keydown', slide);

function change(img) {
    var x = "";
    year.textContent = img;
    info.innerHTML = "&nbsp;&nbsp;Great Khan: " + khans[khanyears[img]] + " Khan";
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
      slider.value = i;
      console.log("next")
      change(i);
      await timer(50)
   }
   window.slideon++;


  }
  if (key.code == "ArrowLeft" && yearstamps[window.slideon - 1] != undefined) {
    for (let i=slider.value; i>yearstamps[window.slideon - 1] - 1; i--) {
      slider.value = i;
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
