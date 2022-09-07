function showAnswer() {
     let image = document.getElementById("zero");
     image.src = "./assets/zero.jpg";
}

function init(){
     let image = document.getElementById("zero");
     image.onclick = showAnswer;
}

window.onload = init;