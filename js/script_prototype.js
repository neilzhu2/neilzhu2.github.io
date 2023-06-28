

// Get elements to interact
const interactiveObjects = document.querySelectorAll(".interactiveObject");

const pin = document.querySelector("#pin");
const commentUI = document.querySelector("#comment-ui");
const noteThread = document.querySelector("#note-thread");
const button_X = document.querySelector("#btn-x");
const button_CTA = document.querySelector("#btn_cta");
const inputField = document.querySelector("#input");

var hasStartedComment = false;

console.log("version 1.07");


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
      inputField.emit("startComment");
      hasStartedComment = true;
      console.log("start to leave comment");
    } else { // meaning now the CTA is "Submit"
      noteThread.emit("submitComment");
      inputField.emit("submitComment");
      this.emit("submitComment");
      console.log("submit the comment");
    }
  }
)

inputField.addEventListener('click',
  function(){
    this.emit("inputComment");
    console.log("typing");
  }
)
