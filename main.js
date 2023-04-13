const body = document.querySelector("body");

const addButton = document.querySelector(".addButton");
const inputField = document.querySelector(".inputField");
const taskList = document.querySelector(".taskList");

addButton.addEventListener("click", function(event) {
    if (inputField.value != "") {
        const li = document.createElement("li");
        
        //add the text inside a p element
        const p = document.createElement("p");
        p.innerText = inputField.value;        
        li.append(p);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttonsDiv");

        //add a "remove" button to the li element
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function(event) {
            taskList.removeChild(li);
        })
        buttonsDiv.append(removeButton);

        //add a "done" button to the li element
        const doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.addEventListener("click", function(event) {
            p.style.textDecoration = "line-through";
        })
        buttonsDiv.append(doneButton);

        li.append(buttonsDiv);

        taskList.append(li);
        inputField.value = "";
    }
});