// var button = document.getElementById("button");
//
//
//
// button.addEventListener("click", ()=>{
//   // console.log(button.innerHTML);
//
//   // button.innerHTML = 1;
//
//   let innerNum = button.innerHTML;
//   button.innerHTML = Number(innerNum) + 1;
// })


// Get elements to interact
const interactiveObjects = document.querySelectorAll(".interactiveObject");

const pin = document.querySelector("#pin");
const note = document.querySelector("#note");


interactiveObjects.forEach((object) => {
  object.addEventListener('mouseenter',
     function(){
        // this.setAttribute("opacity","0.9");
        console.log("mouse enters ", this);
  });

  object.addEventListener('mouseleave',
     function(){
        // this.setAttribute("opacity", "1");
        console.log("mouse leaves ", this);
  });
})

pin.addEventListener('click',
 function(){
    this.setAttribute("opacity", "0.5");
    this.setAttribute("position", "0 0 -0.15");
    note.setAttribute("visibility", "True");
    console.log(this);
});

note.addEventListener('click',
 function(){
    this.setAttribute("visibility", "False");
    pin.setAttribute("opacity", "1");
    pin.setAttribute("position", "0 0 0");
    console.log(this);
});
