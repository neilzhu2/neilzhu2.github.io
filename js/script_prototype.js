

// Get elements to interact
const interactiveObjects = document.querySelectorAll(".interactiveObject");

const pin = document.querySelector("#pin");
const commentUI = document.querySelector("#comment-ui");
const noteThread = document.querySelector("#note-thread");
const button_X = document.querySelector("#btn-x");
const button_CTA = document.querySelector("#btn-cta");
const inputField = document.querySelector("#input");

var hasStartedComment = false;

console.log("version 1.20");


// interactiveObjects.forEach((object) => {
//   object.addEventListener('mouseenter',
//      function(){
//         console.log("mouse enters ", this);
//   });
//
//   object.addEventListener('mouseleave',
//      function(){
//         console.log("mouse leaves ", this);
//   });
// })

pin.addEventListener('click',
 function(){
    this.emit("hidePin");
    commentUI.emit("showUI");
    console.log("show UI and hide pin");
});

button_X.addEventListener('click',
 function(){
    // commentUI.emit("hideUI");
    commentUI.setAttribute("visible", false);
    pin.emit("showPin");
    console.log("show pin and hide UI");
});

button_X.setAttribute("fill", "red");

button_X.addEventListener('mouseenter',
   function(){
      console.log("mouse enters ", this);
});

button_X.addEventListener('mouseleave',
   function(){
      console.log("mouse leaves ", this);
});

button_CTA.addEventListener('click',
  function(){
    if (!hasStartedComment) { // meaning now the CTA is "Comment"
      this.emit("startComment");
      this.setAttribute("src", "Assets/UI_components/Prototyping/Button_Submit.png");
      inputField.emit("startComment");
      hasStartedComment = true;
      console.log("start to leave comment");
    } else { // meaning now the CTA is "Submit"
      // noteThread.emit("submitComment");
      let threadNoteHeight = 2 * 452/384;
      noteThread.setAttribute("scale", `2 ${threadNoteHeight} 1`;);
      noteThread.setAttribute("src", "Assets/UI_components/Prototyping/NoteThread_after.png");
      inputField.emit("submitComment");
      this.emit("submitComment");
      this.setAttribute("src", "Assets/UI_components/Prototyping/Button_Comment.png");
      console.log("submit the comment");
    }
  }
)

inputField.addEventListener('click',
  function(){
    // this.emit("inputComment");
    this.setAttribute("src", "Assets/UI_components/Prototyping/Input-Filled.png");
    console.log("typing");
  }
)
