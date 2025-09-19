"use strict"

const likeBtn = document.querySelector(".likeBtn");
const dislikeBtn = document.querySelector(".dislikeBtn");

const skore = document.querySelector(".skore");
let pocitadlo = 0;

likeBtn.addEventListener("click", prictiSkore);
dislikeBtn.addEventListener("click", odectiSkore);

function prictiSkore() {
    skore.textContent = ++pocitadlo;
}
function odectiSkore() {
    skore.textContent = --pocitadlo;
}

const obrazky = document.querySelectorAll(".predmety img");
console.log(obrazky)

// for(let i = 0; i < obrazky.length; i++) {
//     obrazky[i].addEventListener("click", function () {});
// }

// for(let obrazek of obrazky) {
//     obrazek.addEventListener("click", function () {});
// }

// let selected = 0;

obrazky.forEach(function (obrazek) {
    obrazek.addEventListener("click", function () {
        // if (obrazek.style.border == "5px solid green") {
        //     obrazek.style.border = "";
        //     selected--;
        // } else {
        //     if (selected < 3) {
        //         obrazek.style.border = "5px solid green"
        //         selected++;
        //     } else {
        //         alert("Lze vybrat maximálně 3")
        //     }
        // }
        if(obrazek.classList.contains("selected")) {
            obrazek.classList.remove("selected");
        } else {
            if(document.querySelectorAll(".selected").length < 3) {
                obrazek.classList.add("selected");
            }
        }
    });
});

const ukoly = document.querySelector(".ukoly-seznam");
const ukolBtn = document.querySelector(".ukolBtn");

ukolBtn.addEventListener("click", (evt) => {
    const ukolInput = document.querySelector(".ukolInput");
    if(ukolInput.value.length > 0){
        ukoly.innerHTML += `<li class="list-group-item">${ukolInput.value}</li>`
    }

});


