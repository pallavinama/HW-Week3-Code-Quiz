console.log("Test");
var btn = document.createElement("Button");
btn.innerHTML = "Start Quiz"
console.log(btn.innerHTML);
document.body.appendChild(btn); 


btn.addEventListener("click",function(){
    console.log("clicked start button");
})
