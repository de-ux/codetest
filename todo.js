// general function and document."" was reviewed from Codify Academy


function newItem() {
  var item = document.getElementById("userInput").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";
  checkbox.id = "checkbox"


  li.appendChild(checkbox);

  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById("userInput").value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function(enter) {
  if (enter.keyCode == 13) {
    newItem();
  }
};

function removeItem(enter) {
  enter.target.parentElement.removeChild(enter.target);
}


// button change on keystroke and changes back on enter
var count = 1;
 function changeButton(btn, color) {
     var property = document.getElementById("todoButton");
     if (event.which === 13) {
     property.style.backgroundColor = "rgb(235, 235, 235)"
     property.style.color = "black";

     } else if  (count >= 0) {
       property.style.backgroundColor = "rgb(11, 213, 0)"
       property.style.color = "white"
         count = 1;

     }
     else {
       property.style.backgroundColor = "rgb(235, 235, 235)"
       property.style.color = "black"

         count = 0;
     }
 }
