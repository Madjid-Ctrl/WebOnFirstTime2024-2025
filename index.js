let Content = document.getElementById("Content");
let SayHi = document.getElementById("SayHi"); // SayHi should refer to an HTML element, like a button.

SayHi.onclick = function(){
    Content.textContent = "Hi!";
}