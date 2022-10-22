const addBtn = document.querySelector(".container__button");
const inputField = document.querySelector(".container__input");
const ul = document.querySelector(".container__list");
const infoToUser = document.querySelector(".container__infoToUser");

const taskArr = [];
addBtn.addEventListener("click", function () {

  const userVal = inputField.value;

  if (isVarEmpty(userVal) != true) {

    taskArr.push({
      task: userVal,
    });
    
    infoToUser.innerText = "";

    const li = document.createElement("li");
    ul.appendChild(li);

    const span = document.createElement("span");
    span.innerText = userVal;
    li.appendChild(span);

    inputField.value = ""; //empty field after a successful item is added


  } 
});

function isVarEmpty(variable) {
  if (variable.length == 0) {
    return true;
  }
  false;
}
