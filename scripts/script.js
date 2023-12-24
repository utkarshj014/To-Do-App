const inputBar = document.querySelector(".form input[type='text']");
const addButton = document.querySelector(".add-button");
const unorderedList = document.querySelector(".list ul");


// const regex2 = /^<!--.*-->$/s;


unorderedList.innerHTML = localStorage.getItem("userTasks");

addButton.addEventListener("click", (e) => {
  const regex = /^\s*$/;

  if (!regex.test(inputBar.value)) {
    const newListElement = document.createElement("li");
    newListElement.className = "list-item";

    newListElement.innerHTML =
      '<img src="images/unchecked.png" alt="unchecked">' +
      inputBar.value +
      '<span class="cross"><i class ="fa-solid fa-xmark"></i></span>';

    // const uncheckedImageElement = document.createElement("img");
    // uncheckedImageElement.setAttribute("src", "images/unchecked.png");
    // uncheckedImageElement.setAttribute("alt", "unchecked");

    // newListElement.appendChild(uncheckedImageElement);

    // const textNode = document.createTextNode(inputBar.value);
    // newListElement.appendChild(textNode);

    // const crossElement = document.createElement("i");
    // crossElement.className = "cross fa-solid fa-xmark";
    // newListElement.appendChild(crossElement);

    unorderedList.appendChild(newListElement);

    saveData();

    // unorderedList.style.display = "block";
  }
  else {
    alert("Please enter a Task!!");
  }


  // if (!regex2.test(unorderedList.innerHTML)) {
  //   localStorage.setItem("userTasks", unorderedList.innerHTML);
  // }


  inputBar.value = "";
});

unorderedList.addEventListener("click", (e) => {
  const clickedElement = e.target;
  // console.log(clickedElement);

  if (clickedElement.getAttribute("alt") === "unchecked") {
    clickedElement.setAttribute("src", "images/checked.png");
    clickedElement.setAttribute("alt", "checked");
    clickedElement.parentElement.style.textDecoration = "line-through";
  } else if (clickedElement.getAttribute("alt") === "checked") {
    clickedElement.setAttribute("src", "images/unchecked.png");
    clickedElement.setAttribute("alt", "unchecked");
    clickedElement.parentElement.style.textDecoration = "none";
  } else if (clickedElement.parentElement.classList.contains("cross")) {
    clickedElement.parentElement.parentElement.remove();
  }

  // if (!regex2.test(unorderedList.innerHTML)) {
  //   localStorage.setItem("userTasks", unorderedList.innerHTML);
  // }

  saveData();

});

const saveData = () =>{
  localStorage.setItem("userTasks", unorderedList.innerHTML);
}