

// Get elements to interact
const interactiveObjects = document.querySelectorAll(".interactiveObject");

const pin = document.querySelector("#pin");
const commentUI = document.querySelector("#comment-ui");
const noteThread = document.querySelector("#note-thread");
const button_X = document.querySelector("#btn-x");
const button_CTA = document.querySelector("#button_CTA");
const inputField = document.querySelector("#input");

var hasStartedComment = false;


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
    this.emit("hidePin");
    commentUI.emit("showUI");
    console.log("show UI and hide pin");
});

button_X.addEventListener('click',
 function(){
    commentUI.emit("hideUI");
    pin.emit("showPin");
    console.log("show pin and hide UI");
});

button_CTA.addEventListener('click',
  function(){
    if (!hasStartedComment) { // meaning now the CTA is "Comment"
      this.emit("startComment");
      input.emit("startComment");
      hasStartedComment = true;
    } else { // meaning now the CTA is "Submit"
      noteThread.emit("submitComment");
      input.emit("submitComment");
      this.emit("submitComment");
    }
  }
)
