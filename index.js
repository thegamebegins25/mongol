function change(img) {
    document.getElementById("image").src = "img/" + img + ".jpg";
}

var slider = document.getElementById("slider");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log(this.value);
  change(this.value);
  
}