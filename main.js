const body = document.querySelector("body");

const addButton = document.querySelector(".addButton");
const inputField = document.querySelector(".inputField");
const taskList = document.querySelector(".taskList");
const showDoneButton = document.querySelector(".showDoneButton,.showAllButton");

addButton.addEventListener("click", function(event) {
    if (inputField.value != "") {
        const li = document.createElement("li");
        
        //add the text inside a p element
        const p = document.createElement("p");
        p.innerText = inputField.value;
        p.classList.add("darkMode");
        p.classList.add("changeFontColor");
        if (taskList.classList.contains("darkModeAffected")) {
            p.classList.add("darkModeAffected", "whiteLetters");
        }
        li.append(p);

        const liButtonDiv = document.createElement("div");
        liButtonDiv.classList.add("liButtonDiv");

        //add a "remove" button to the li element
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function(event) {
            taskList.removeChild(li);
        })
        removeButton.classList.add("darkMode", "removeButtonOrDoneButton", "lightYellow");
        liButtonDiv.append(removeButton);

        //add a "done" button to the li element
        const doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.addEventListener("click", function(event) {
            p.style.textDecoration = "line-through";
            li.classList.add("done");
        })
        doneButton.classList.add("darkMode", "removeButtonOrDoneButton", "lightYellow");
        liButtonDiv.append(doneButton);

        li.append(liButtonDiv);
        
        if (showDoneButton.classList.contains("showOnlyDone")) {
            li.classList.add("hide");
            alert(`Please note: the task '${inputField.value}' was added in 'Show only Done' and will be visible only after you press the 'Show All' button`);
        }

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

showDoneButton.addEventListener("click", function(event) {
    showDoneButton.classList.toggle("showOnlyDone");
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

const isArraysOverlap = function(array1, array2) {
    return array1.filter(value => array2.includes(value)).length != 0;
}

const darkModeButton = document.querySelector(".darkModeButton");
darkModeButton.addEventListener("click", function(event) {
    const darkModeElements = document.querySelectorAll(".darkMode");
    darkModeElements.forEach(function(element) {
        const darkLightClasses = [ ...element.classList ];
        element.classList.toggle("darkModeAffected");
        if (isArraysOverlap(["lightBlue", "darkBlue"], darkLightClasses)) {
            element.classList.toggle("darkBlue");
            element.classList.toggle("lightBlue");
        }
        if (isArraysOverlap(["lightYellow", "darkYellow"], darkLightClasses)) {
            element.classList.toggle("darkYellow");
            element.classList.toggle("lightYellow");
        }
        if (isArraysOverlap(["white", "black"], darkLightClasses)) {
            element.classList.toggle("black");
            element.classList.toggle("white");
        }
        if (isArraysOverlap(["changeFontColor"], darkLightClasses)) {
            element.classList.toggle("whiteLetters");
        }
    });
})