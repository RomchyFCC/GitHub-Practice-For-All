const secretPicture = document.getElementById("secret-picture");

window.addEventListener('click', (event)=>{
  // Show picture when user clicks anywhere on screen
  if(event.target === secretPicture)
    secretPicture.style.visibility = "hidden";
  else
    secretPicture.style.visibility = "visible";
})

let secretArray = ['s','a','c','h','i','t','h','r','a'];
let userArray = [];

const secretCompare = (e) => {
  //Get the key pressed
  let key = String.fromCharCode(e.keyCode);
  userArray.push(key.toLowerCase());

  //Slice the secretArray and compare to userArray on every keypress
  let partialArray = secretArray.slice(0, userArray.length);

  //If key pressed doesn't match sliced secretArray, clear userArray
  //so they can try again
  if(userArray.join('') !== partialArray.join('')) {
    userArray = [];
  }

  //If user types secret code, show picture
  if(userArray.join('') === secretArray.join('')) {
    document.getElementById("secret-picture").style.visibility = "visible";
    userArray = [];
  }
}

(function () {
  'use strict';

  // Get RGB channels from a Random Numbers
  function RGBFromRandom() {
    return [
      (Math.floor(Math.random()*(255-0+1)+0)),
      (Math.floor(Math.random()*(255-0+1)+0)),
      (Math.floor(Math.random()*(255-0+1)+0))
    ].map(Math.round);
  }

  // Get color luminance as a float from RGB channels
  function colorLuminance(red, green, blue) {
    return ((0.299 * red) + (0.587 * green) + (0.114 * blue)) / 256;
  }

  // Get font color from RGB channels from background
  function colorFromRGB(red, green, blue) {
    return colorLuminance(red, green, blue) > 0.7 ? 'black' : 'white';
  }

    function color() {
    var channels = RGBFromRandom();

    document.getElementById('mukul').style.color=colorFromRGB.apply(this, channels);
    document.getElementById('mukul').style.color = 'rgb(' + channels.join(',') + ')';
}

  var t = setInterval(color, 100);
}());


document.addEventListener('keydown', (e) => secretCompare(e));
