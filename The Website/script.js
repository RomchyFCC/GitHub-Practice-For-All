window.addEventListener('click', ()=>{
  // Show picture when user clicks anywhere on screen
  document.getElementById("secret-picture").style.visibility = "visible";
})

let secretArray = ['m','i','l','l','s',' ','r','u','l','e','s'];
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

document.addEventListener('keydown', (e) => secretCompare(e));
