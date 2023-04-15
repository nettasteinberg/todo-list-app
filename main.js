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

        const liButtonDiv = document.createElement("div");
        liButtonDiv.classList.add("liButtonDiv");

        //add a "remove" button to the li element
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function(event) {
            taskList.removeChild(li);
        })
        liButtonDiv.append(removeButton);

        //add a "done" button to the li element
        const doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.addEventListener("click", function(event) {
            p.style.textDecoration = "line-through";
            li.classList.add("done");
        })
        liButtonDiv.append(doneButton);

        li.append(liButtonDiv);

        taskList.append(li);
        inputField.value = "";
        inputField.focus();
    }
});

// pressing enter when the input field is not empty works as clicking the 'Add' button
inputField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      addButton.click();
    }
  });

const showDoneButton = document.querySelector(".showDone,.showAll");
showDoneButton.addEventListener("click", function(event) {
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(item) {
        if (!item.classList.contains("done")) {
            item.classList.toggle("hide");
        }
    })
    if (showDoneButton.innerText === "Show Done") {
        showDoneButton.innerText = "Show All";
    } else {
        showDoneButton.innerText = "Show Done";
    }
})