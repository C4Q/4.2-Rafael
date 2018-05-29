const submitbtn = document.getElementById("sub")
const todoinput = document.getElementById("input")
const todolist = document.getElementById("thelist")

submitbtn.addEventListener("click", function() {
    if(todoinput.value) {
        var li = document.createElement("li");
        li.innerText = todoinput.value;
        todolist.appendChild(li);
        todoinput.value = ""
        elements = document.querySelectorAll("li")
        for(var i=0; i<elements.length; i++)
            elements[i].addEventListener("click",remove)
    }
})

function remove() {
    this.parentNode.removeChild(this);
}