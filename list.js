const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list-content");

function addTask(){
    if(inputBox.value === ''){
        alert("you have to write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let button = document.createElement("button");
        button.innerHTML = "remove";
        li.appendChild(button);
    }
    inputBox.value = "";
    saveData();
}

listBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listBox.innerHTML);
}
function showTask(){
    listBox.innerHTML = localStorage.getItem("data")
}
showTask();