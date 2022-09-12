function showAnswer(e){
     var image = e.target;
     var name = image.id;
     name = "./assets/" + name + ".jpg";
     image.src = name;
     // setTimeout(reblur, 2000, image);
}

function reblur(e) {
     console.log(e.timestamp);
     var image = e.target;
     var name = image.id;
     name = "./assets/" + name + "blur.jpg";
     image.src = name;
}

function init(){
     var images = document.getElementsByTagName("img");
     for (var i = 0; i < images.length; i++) {
          images[i].onmouseover = showAnswer;
          images[i].onmouseout= reblur;
     }
}

window.onload = init;