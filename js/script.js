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
  // object.addEventListener('mouseenter',
  //    function(){
  //       this.setAttribute("opacity","0.9");
  //       console.log(this);
  // });
  //
  // object.addEventListener('mouseleave',
  //    function(){
  //       this.setAttribute("opacity", "1");
  // });

  pin.addEventListener('click',
   function(){
      this.setAttribute("opacity", "0.5")
      note.setAttribute("opacity", "1")
      console.log(this);
  });

})
