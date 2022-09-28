"use strict";

var boxElemsBt = document.getElementsByClassName("asced-list__transparency-button");

for (var index = 0; index < boxElemsBt.length; index++) {
  boxElemsBt[index].onclick = function (event) {
    event.stopPropagation();
  };
}

var boxElems = document.getElementsByClassName("box-question"); // for (let index = 0; index < boxElems.length; index++) {
//    boxElems[index].onclick = function(event) {
//     let boxShadow = event.currentTarget.getElementsByClassName("box-shadow")[0]
//     let arrowBox = event.currentTarget.getElementsByClassName("arrow-box")[0]
//     let labelBox = event.currentTarget.getElementsByClassName("text-question")[0]
//     if (boxShadow.classList.contains("displayNone")) {
//         boxShadow.classList.remove("displayNone")
//         boxShadow.classList.add("displayFlex")
//         arrowBox.classList.remove("arrow-box-bot")
//         arrowBox.classList.add("arrow-box-top")
//         labelBox.classList.remove("text-question-normal")
//         labelBox.classList.add("text-question-grey")
//     } else if (boxShadow.classList.contains("displayFlex")){
//         boxShadow.classList.remove("displayFlex")
//         boxShadow.classList.add("displayNone")
//         arrowBox.classList.remove("arrow-box-top")
//         arrowBox.classList.add("arrow-box-bot")
//         labelBox.classList.remove("text-question-grey")
//         labelBox.classList.add("text-question-normal")  
//     }
//   }
// } 

for (var _index = 0; _index < boxElems.length; _index++) {
  boxElems[_index].onclick = function (event) {
    if (event.currentTarget.classList.contains("box-question--active")) {
      event.currentTarget.classList.remove("box-question--active");
    } else {
      var openElem = event.currentTarget.parentElement.getElementsByClassName("box-question--active")[0];
      if (openElem) openElem.classList.remove("box-question--active");
      event.currentTarget.classList.add("box-question--active");
    }
  };
}