

fetch("https://kea-alt-del.dk/t5/api/categories")
.then(function (response){
    return response.json()
})
    .then(createSections)
function createSections(data){
    console.log(data)
    data.forEach(function (oneSection){
        const section = document.createElement("section");
        section.id = oneSection;
        const h2 = document.createElement("h2");
        h2.textContent=oneSection;
        section.appendChild(h2);
        document.querySelector(".background").appendChild(section)
        })
    getProducts();
}

function getProducts(){
fetch(" https://kea-alt-del.dk/t5/api/productlist ")
.then(function (response){
    return response.json()
})
    .then(function (data){
        showData(data)
    })

    }
function showData(jsonData){
    //console.log(jsonData)
    jsonData.forEach(showSingle)
}

function showSingle(course){
    console.log(course)
const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h3").textContent = course.name;
aCopy.querySelector("h5").textContent = course.shortdescription;
aCopy.querySelector("p.long").textContent = course.longdescription;
aCopy.querySelector("p span.price").textContent = course.price;

    if (course.discount){
       aCopy.querySelector("p span.discount").textContent=course.price;
        const newPrice = Math.round(course.price - course.price * course.discount / 100);

    }
    else{
        aCopy.querySelector(".sale").remove()
        aCopy.querySelector("p span.price").textContent = course.price
    }

console.log(`#${course.category}`)
document.querySelector(`#${course.category}`).appendChild(aCopy);
/*const whosYourDaddy = document.querySelector("template").parentNode;

whosYourDaddy.appendChild(aCopy);

/*let Readmore = document.querySelector("#Readmore");
let hidden = document.querySelector(".hidden");
Readmore.addEventListener("click", show);*/

}

function show(){
    hidden.classList.toggle("show");
    document.getElementById("Readmore").childNodes[0].nodeValue=
   "Close";
}
