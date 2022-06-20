var facts = document.querySelector("form");
var display = document.getElementById("factdisplay");
var body = document.querySelector("body");

facts.a.addEventListener("click", one);
facts.b.addEventListener("click", two);
facts.c.addEventListener("click", three);
facts.d.addEventListener("click", four);
facts.e.addEventListener("click", five);

function one(){
	display.innerHTML = "Every 'c' in Pacific Ocean is pronounced differently.<br><br><img src='images/Pacific.jpg' height='425'>";
	display.style.color="#ca6702";
	display.style.backgroundColor="#bde0fe";
	display.style.border="2px solid #219ebc";
	display.style.fontFamily="Verdana";
	body.style.backgroundColor="#caf0f8";
}
function two(){
	display.innerHTML = "There is a species of jellyfish that are immortal.<br><br><img src='images/Jellyfish.jpg' height='420px'> <br><em>Image of jellyfish above isn't the Turritopsis dohrnii (immortal jellyfish).</em>";
	display.style.color="#124559";
	display.style.backgroundColor="#fefae0";
	display.style.border="2px solid #283618";
	display.style.fontFamily="Courier New";
	body.style.backgroundColor="#e9edc9";
}
function three(){
	display.innerHTML = "There are more trees on Earth than stars in the Milky Way.<br><br><img src='images/MilkyWay.jpg' height='425px'>"
	display.style.color="#e5e5e5";
	display.style.backgroundColor="#14213d";
	display.style.border="2px solid #ffffff";
	display.style.fontFamily="Verdana";
	body.style.backgroundColor="#bbd0ff";
}
function four(){
	display.innerHTML = "The real name for a hashtag is an octothorp.<br><br><img src='images/Hashtag.jpg' height='425px'>";
	display.style.color="#ba181b";
	display.style.backgroundColor="#e6ccb2";
	display.style.border="2px solid #cb997e";
	display.style.fontFamily="Courier New";
	body.style.backgroundColor="#ae2012";
}
function five(){
	display.innerHTML = "Neptune has at least five main rings and four prominent ring arcs.<br><br><img src='images/Neptune.jpg' height='420px'><br><em>Neptune's rings are dark and relatively young, so they are difficult to see.</em>";
	display.style.color="#3a0ca3";
	display.style.backgroundColor="#ade8f4";
	display.style.border="2px solid #03045e";
	display.style.fontFamily="Verdana";
	body.style.backgroundColor="#4361ee";
}