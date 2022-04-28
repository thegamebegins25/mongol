function change(img) {
    var x = "";
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

var slider = document.getElementById("slider");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log(this.value);

  change(this.value);
  
}