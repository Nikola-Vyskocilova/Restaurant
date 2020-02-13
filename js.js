    const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

fetch("https://kea-alt-del.dk/t5/api/categories")
.then(function (response){
    return response.json()
})
    .then(createSections)

function createSections(data){
    console.log(data)
    data.forEach(function (oneSection){
        const a = document.createElement("a");
        a.setAttribute("href", `#${oneSection}`);
        a.textContent = oneSection;
        document.querySelector("#wrapper>header>nav").appendChild(a);
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
const imageName = course.image;
    const base = "https://kea-alt-del.dk/t5/site/imgs/";
    const smallImg = base + "small/" + imageName + "-sm.jpg";
     const template = document.querySelector("#dishTemplate").content;
    const aCopy = template.cloneNode(true);

    console.log(course)
 console.log(template)


console.log(aCopy);



aCopy.querySelector("h3").textContent = course.name;
aCopy.querySelector("h5").textContent = course.shortdescription;
aCopy.querySelector("p.long").textContent = course.longdescription;
aCopy.querySelector("p span.price").textContent = course.price;
aCopy.querySelector("p span.pricecrossed").textContent=course.price;
    aCopy.querySelector(".image").src =smallImg;
aCopy.querySelector("p span.alcohol").textContent = course.alcohol;


    if (course.discount){
        const newPrice = Math.round(course.price - course.price * course.discount / 100);
         aCopy.querySelector("p span.discount").textContent=newPrice;
        aCopy.querySelector("#originalPrice").remove();

    }
    else{
        aCopy.querySelector(".sale").remove()
        aCopy.querySelector("p span.price").textContent = course.price
         aCopy.querySelector(".tag").remove()

    }

    if (course.alcohol>0){
        aCopy.querySelector("p span.alcohol").textContent = course.alcohol;
    }
else{
        aCopy.querySelector("#alcohol").remove();
    }

if (course.vegetarian){
       aCopy.querySelector(".vegetarian");
    }
    else{
         aCopy.querySelector(".vegetarian").remove();
    }

    if(course.soldout == "false"){
        aCopy.querySelector(".opacity").remove();
    }
    else{
        aCopy.querySelector(".opacity");
    }


  aCopy.querySelector("button").addEventListener("click", () => {
    fetch(`https://kea-alt-del.dk/t5/api/product?id=${course.id}`)
      .then(res => res.json())
      .then(showDetails);
  });

console.log(`#${course.category}`)
document.querySelector(`#${course.category}`).appendChild(aCopy);

 }
function showDetails(data) {
  modal.querySelector(".modal-name").textContent = data.name;
  modal.querySelector(".modal-description").textContent = data.longdescription;
  //...
  modal.classList.remove("hide");

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
