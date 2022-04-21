// Challenge 1
let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");

let savedStringValue = localStorage.getItem("savedStringValue");

if (savedStringValue === null) {
  savedString.innerText = "Nothing Saved - Please submit an item into the form";
} else {
  savedString.innerText = savedStringValue;
}

stringSaveForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //localStorage.setItem('key','value') - adds a key value pair into your local storage that will persist even after you refresh or exist the page
  localStorage.setItem("savedStringValue", stringInput.value);

  //localStorage.getItem('key') - takes in a key as a parameter and gets the value associated with that key from localStorage
  console.log(localStorage.getItem("savedStringValue"));

  savedStringValue = localStorage.getItem("savedStringValue");
  savedString.innerText = savedStringValue;
});

// Challenge 2

let counter = document.querySelector("#counter");
let count = localStorage.getItem("count");

if (count === null) {
  count = 0;
  counter.innerText = count;
} else {
  counter.innerText = count;
}

count++;
localStorage.setItem("count", count);

// Challenge 3

let listForm = document.querySelector("#list-form");
let listInput = document.querySelector("#list-input");
let savedList = document.querySelector("ol");

let savedListValue = localStorage.getItem("list");

function setupArray() {
  savedListValue = localStorage.getItem("list");
  if (savedListValue === null) {
    savedListValue = [];
  } else {
    savedListValue = JSON.parse(savedListValue);

    for (let i = 0; i < savedListValue.length; i++) {
      let savedListItem = document.createElement("li");
      savedListItem.innerHTML = savedListValue[i];
      savedList.appendChild(savedListItem);
    }
  }
}

setupArray();

listForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let newInput = listInput.value;

  savedListValue.push(newInput);

  localStorage.setItem("list", JSON.stringify(savedListValue));
  console.log(savedListValue);

  let savedListItem = document.createElement("li");

  savedListItem.innerHTML = newInput;

  savedList.appendChild(savedListItem);

  listInput.value = "";
});
