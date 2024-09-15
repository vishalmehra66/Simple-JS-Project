
// Adding Functionality to this To Do List 

function add_items() {
    var item = document.getElementById("box").value;
    var list_items = document.getElementById("list_items");

    if (item !== "") {
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item));  // Adding Task to the List 
        list_items.appendChild(make_li);

        document.getElementById("box").value = "";   
        
        make_li.onclick = function () {
            this.parentNode.removeChild(this);
        };   // Remove Task when it Is Complete
    }
     else 
    {
        alert("Please add an item to the list");
    }

    // let removeButton = document.createElement("button");
    // removeButton.textContent = "Remove";
    // removeButton.onclick = function () {
    //     this.parentNode.remove();
    // };
    // make_li.appendChild(removeButton);
}