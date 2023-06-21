var button = document.getElementById("button");



button.addEventListener("click", ()=>{
  // console.log(button.innerHTML);

  // button.innerHTML = 1;

  let innerNum = button.innerHTML;
  button.innerHTML = Number(innerNum) + 1;
})
