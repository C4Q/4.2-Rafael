const blue = document.getElementById("blue")
const pink= document.getElementById("pink")
const gold= document.getElementById("gold")
const black= document.getElementById("black")
const green= document.getElementById("green")
const red= document.getElementById("red")

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
})
pink.addEventListener("click", function() {
    document.body.style.backgroundColor = "pink";
})
gold.addEventListener("click", function() {
    document.body.style.backgroundColor = "GoldenRod";
})
black.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
})
green.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
})
red.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
})