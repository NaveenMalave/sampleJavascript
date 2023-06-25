var btn = document.getElementById("click");
var mainDiv = document.querySelector("header div");
function onBtnclick()
{
    // alert("button clicled");
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
}
btn.addEventListener('click',onBtnclick)