let green = document.getElementById("greenplanet");
console.log(green.innerHTML);
green.innerHTML = "Red Alert: Hit by a phaser fire";
console.log(green.innerHTML + " styled " + green.getAttribute("style"));

green.setAttribute("class", "redtext");
let planetImage = document.getElementById("img");
console.log("Image doesn't display well but it looks like "+ planetImage.getAttribute("alt"));
// console.log(green.outerHTML);

// let content = document.getElementsByClassName("content");
// console.log(content);

// let p_tags = document.getElementsByTagName("div");
// console.log(p_tags);