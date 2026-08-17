let mainContainer = document.querySelector("#container");
let clickModeActive = false;
let erase = false;
let mousedown = false;

makeASquare()



function paintASquare(square) {

  let rgb = ["red", "green", "blue"];
  let randomRgbIndex = Math.floor(Math.random() * (rgb.length));
  square.target.style.backgroundColor = (erase) ? "white" : rgb[randomRgbIndex];

}


function makeASquare() {

  let size = +prompt("Enter a size");

  for (let i = 0; i < size; i++) {

    let rowContainer = document.createElement("div");
    rowContainer.classList.add("rowFlexBox");

    for (let j = 0; j < size; j++) {

      let newSquare = document.createElement("div");
      rowContainer.appendChild(newSquare);
      newSquare.classList.add("squares");

    }

    mainContainer.appendChild(rowContainer);
  }

}



mainContainer.addEventListener("mouseover", function (square) {

  if ((!clickModeActive || mousedown) && square.target !== mainContainer) paintASquare(square);

});

mainContainer.addEventListener("mousedown", function (square) {

  square.preventDefault();
  if (clickModeActive && square.target !== mainContainer) {
    paintASquare(square);
    mousedown = true;
  }
})

document.body.addEventListener("mouseup", () => {

  mousedown = false;
  console.log("mouse was just put up");

})



let squareList = document.querySelectorAll(".squares");


document.body.addEventListener("click", function (event) {

  if (event.target.id === "reset")
    squareList.forEach((square) => square.style.backgroundColor = "white");


  else if (event.target.id === "mode") {
    clickModeActive = !clickModeActive

    if(event.target.textContent === "trace") 
      event.target.textContent = "click";

    else event.target.textContent = "trace";

  }
  
  else if (event.target.id === "eraser") {

    erase = !erase;

    if (event.target.textContent === "eraser (on)") 
      event.target.textContent = "eraser (off)";
    

    else 
      event.target.textContent = "eraser (on)";
 
  
  }


})