console.log("hello");


function addItem() {
    // declaring what elements from the html are in js
    let input = document.getElementById("input").value;
    let list = document.getElementById("list");
    // declares a new variable 'item', makes a new list item
    let item = document.createElement("li");
    // input value becomes new text, then is added to 'item'
    item.appendChild(document.createTextNode(input));
    // adds 'item' to the list
    list.appendChild(item);
    // resets the placeholder text
    document.getElementById("input").value = "";
  } 