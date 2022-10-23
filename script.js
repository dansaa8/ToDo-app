const btnAddTask = document.querySelector(".container__button");
const inputField = document.querySelector(".container__input");
const ul = document.querySelector(".container__ul");
const infoToUser = document.querySelector(".container__infoToUser");
const completedTasks = document.querySelector(".container__completedTasks");

const taskArr = [];
let count = 0;

btnAddTask.addEventListener("click", function () {
  const userVal = inputField.value;

  if (isVarEmpty(userVal) != true) {
    infoToUser.innerText = "";
    infoToUser.setAttribute("class", "");

    taskArr.push({
      task: userVal,
    });

    const li = document.createElement("li");
    ul.appendChild(li);

    const taskInfo = document.createElement("span");
    taskInfo.innerText = userVal;
    li.appendChild(taskInfo);

    inputField.value = ""; //empty field after a successful item is added

    taskInfo.addEventListener("click", function () {
      //every span element gets this function
      if (li.getAttribute("class") == "completed") {
        li.setAttribute("class", "");
        count--;
      } else {
        li.setAttribute("class", "completed");
        count++;
      }
      completedTasks.innerText = `${count} completed`;
    });

    const trashCan = document.createElement("span");
    trashCan.innerHTML = "  &#x1F5D1";
    li.appendChild(trashCan);

    trashCan.addEventListener("click", function () {
      // if (li.getAttribute("class") == "completed") {
      //   count--;
      // }
      removeObjFromArr(taskInfo.innerText);
      li.remove();
      completedTasks.innerText = `${count} completed`;
    });
  } else {
    //outer statement
    infoToUser.innerText = "Input must not be empty";
    infoToUser.setAttribute("class", "blinkingRed");
    console.log("empty input");
  }
});

function removeObjFromArr(taskToBeRemoved) {
  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].task == taskToBeRemoved) {
      taskArr.splice([i], 1);
    }
  }
}

function isVarEmpty(variable) {
  if (variable.length == 0) {
    return true;
  }
  false;
}
