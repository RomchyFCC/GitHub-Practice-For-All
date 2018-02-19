window.addEventListener('click', ()=>{
  // Show picture when user clicks anywhere on screen
  document.getElementById("secret-picture").style.visibility = "visible";
  // TODO Show picture only when user types secret word
})

let secretArray = ['r', 'o', 'm', 'c', 'h', 'y'];
let userArray = [];

const secretCompare = (e) => {
  //Get the key pressed
  let key = String.fromCharCode(e.keyCode);
  userArray.push(key.toLowerCase());

  //Slice the secretArray and compare to userArray on every keypress
  let partialArray = secretArray.slice(0, userArray.length);

  //If key pressed doesn't match sliced secretArray, clear userArray
  if(userArray.join('') !== partialArray.join('')) {
    userArray = [];
  }

  //If user types secret code, do awesome stuff!
  //Clear userArray so they can keep adding unicorns
  if(userArray.join('') === secretArray.join('')) {
    cornify_add();
    userArray = [];
  }
}

document.addEventListener('keydown', (e) => secretCompare(e));
