var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");

color1.addEventListener("input",function() {
	gradient.style.background = "linear-gradient(to right" + ", " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input",function() {
	gradient.style.background = "linear-gradient(to right" + ", " + color1.value + ", " + color2.value + ")";
})