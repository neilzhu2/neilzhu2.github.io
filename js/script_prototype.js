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
        console.log("mouse enters ", this);
  });

  object.addEventListener('mouseleave',
     function(){
        console.log("mouse leaves ", this);
  });
})

pin.addEventListener('click',
 function(){
    // this.setAttribute("position", "0 0 -0.15");
    // note.setAttribute("visible", true);
    this.emit("hidePin");
    note.emit("showNote");
    console.log(this);
});

note.addEventListener('click',
 function(){
    this.emit("hideNote");
    pin.emit("showPin");
    console.log(this);
});
