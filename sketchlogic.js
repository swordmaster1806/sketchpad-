let mainContainer = document.querySelector("#container");

makeASquare()


let clickModeActive = false;
let erase = false;
let mousedown = false;




function paint(square) {

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
      newSquare.classList.add("rowFlexBoxChildren");

    }

    mainContainer.appendChild(rowContainer);
  }

}



mainContainer.addEventListener("mouseover", function(square){

  if((!clickModeActive || mousedown) && square.target !== mainContainer) paint(square);
     
});

mainContainer.addEventListener("mousedown" , function(square){
  square.preventDefault();
  if(clickModeActive && square.target !== mainContainer){
    paint(square);
    mousedown = true;
  }
})

document.body.addEventListener("mouseup" , () =>{

   mousedown = false
   console.log("mouse was just put up");
  
  })

document.querySelector("#mode").addEventListener("click" , () => {
  clickModeActive = !clickModeActive

});


