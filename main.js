const body = document.querySelector("body");

const addButton = document.querySelector(".addButton");
const inputField = document.querySelector(".inputField");
const taskList = document.querySelector(".taskList");

addButton.addEventListener("click", function(event) {
    if (inputField.value != "") {
        const li = document.createElement("li");
        li.innerText = inputField.value;        
        
        //add a "remove" button to the li element
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function(event) {
            taskList.removeChild(li);
        })
        li.append(removeButton);

        //add a "done" button to the li element

        taskList.append(li);
        inputField.value = "";
    }
});