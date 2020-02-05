const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h2").textContent = "Cabanossi with beetrootcreme";
aCopy.querySelector("p").textContent = "Cabanossi med rødbedecreme og creme er egentlig en forret, men kammerat Vladimir elskede denne ret så højt, ";

const whosYourDaddy = document.querySelector("main");

whosYourDaddy.appendChild(aCopy);

let Readmore = document.querySelector("#Readmore");
let hidden = document.querySelector(".hidden");
Readmore.addEventListener("click", show);



function show(){
    hidden.classList.toggle("show");
    document.getElementById("Readmore").childNodes[0].nodeValue=
   "Close";
}


