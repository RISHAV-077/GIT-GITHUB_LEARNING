const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        //Yes, exactly. When the element (like an <li>) is initially created,
        //it does not have the "checked" class, so it appears unchecked or in its default state.
// When you click on that <li>, the code uses classList.toggle("checked") to add the "checked" class if it’s not already there.
// This changes the element's appearance or behavior according to the CSS rules defined for the "checked" class.
// If you click it again, the "checked" class is removed, reverting the element back to the unchecked or default state.
//  So the interface toggles between checked and unchecked visually and functionally, depending on whether the "checked" class is assigned.
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();