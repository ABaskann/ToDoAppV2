let id_daily = 1,
    id_important = 1,
    id_most_important = 1,
    array_daily = [],
    array_important = [],
    array_most_important = [];

takeTask();

function takeTask() {
  array_daily=[];
  if (JSON.parse(localStorage.getItem("daily_array")) != null) {    
    JSON.parse(localStorage.getItem("daily_array")).forEach((element) => {
      array_daily.push(element);      
      drawTask(table1, id_daily, element, "#47B5FF", "first");
    });
  }  
  if (JSON.parse(localStorage.getItem("important_array")) != null) {
    array_important.length=0;
    JSON.parse(localStorage.getItem("important_array")).forEach((element) => {
      array_important.push(element);      
      drawTask(table2, id_important, element, "#FBCB0A", "second");
    });
  }  
  if (JSON.parse(localStorage.getItem("most_important_array")) != null) {
    array_most_important.length=0;
    JSON.parse(localStorage.getItem("most_important_array")).forEach((element) => {
      array_most_important.push(element);
      
      drawTask(table3,id_most_important,element,"#FF1E1E","third");
    });
  } 

  let buttonDOM = document.querySelector("#buttonsent");
  buttonDOM.addEventListener("click", addButton);
}

function addButton() {
  event.preventDefault();
  createTable();
}

function createTable() {
  let table1 = document.querySelector("#table1"),
      table2 = document.querySelector("#table2"),
      table3 = document.querySelector("#table3"),
      enteredTaskDOM = document.querySelector("#enteredTask"),
      selectDOM = document.querySelector("#select");

  if (enteredTaskDOM.value.length == 0) {
    window.alert("Please enter your task!!!");
  } else {
    if (selectDOM.value == 1) {
      createTask(table1, id_daily, enteredTaskDOM.value, "#47B5FF", "first");
    } else if (selectDOM.value == 2) {
      createTask(table2,id_important,enteredTaskDOM.value,"#FBCB0A","second");
    } else {
      createTask(table3,id_most_important,enteredTaskDOM.value,"#FF1E1E","third");
    }
    enteredTaskDOM.value = "";
  }
}
function createTask(table, id, task, color, which) {
  table.classList.remove("invisible");
  table.classList.add("visible");
  let trElement = document.createElement("tr"),
      tbodyElement = document.createElement("tbody"),
      id_element = document.createElement("td"),
      task_element = document.createElement("td"),
      done_element = document.createElement("td"),
      checkbox = document.createElement("INPUT");

  checkbox.setAttribute("id", "checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "onClicked(checkbox)");
  checkbox.classList.add("form-check-input");

  trElement.style.borderColor = color;
  trElement.appendChild(id_element);
  trElement.appendChild(task_element);
  trElement.appendChild(done_element);

  done_element.appendChild(checkbox);
  tbodyElement.appendChild(trElement);
  table.appendChild(tbodyElement);
  id_element.innerHTML = id;
  task_element.innerHTML = task;

  if (which == "first") {
    array_daily.push(task);    
    localStorage.removeItem("daily_array");
    localStorage.setItem("daily_array", JSON.stringify(array_daily));
    id_daily++;
  } else if (which == "second") {
    array_important.push(task);
    localStorage.setItem("important_array", JSON.stringify(array_important));
    id_important++;
  } else if (which == "third") {
    array_most_important.push(task);
    localStorage.setItem("most_important_array", JSON.stringify(array_most_important));
    id_most_important++;
  }

  onClicked(checkbox);
  
}
function onClicked(checkbox) {
  if (checkbox.checked == true) {
    console.log("basıldı");
  } else {
    console.log("basılmadı");
  }
}
function drawTask(table, id, task, color, which) {
  table.classList.remove("invisible");
  table.classList.add("visible");
  let trElement = document.createElement("tr"),
      tbodyElement = document.createElement("tbody"),
      id_element = document.createElement("td"),
      task_element = document.createElement("td"),
      done_element = document.createElement("td"),
      checkbox = document.createElement("INPUT");

  checkbox.setAttribute("id", "checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "onClicked(checkbox)");
  checkbox.classList.add("form-check-input");

  trElement.style.borderColor = color;
  trElement.appendChild(id_element);
  trElement.appendChild(task_element);
  trElement.appendChild(done_element);

  done_element.appendChild(checkbox);
  tbodyElement.appendChild(trElement);
  table.appendChild(tbodyElement);
  id_element.innerHTML = id;
  task_element.innerHTML = task;
  if (which == "first") {
        
    id_daily++;
  } else if (which == "second") {
       
    id_important++;
  } else if (which == "third") {
      
    id_most_important++;
  }

  onClicked(checkbox);
 
}

