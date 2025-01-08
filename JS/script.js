console.log("Hejka!");

let buttonItem = document.querySelector(".buttonItem");
let photoItem = document.querySelector(".photoItem");
let button = document.querySelector(".button");
let changeButton = document.querySelector(".changeButton");

buttonItem.addEventListener("click", () => {
    photoItem.remove();

    if (photoItem.remove) {
        changeButton.innerText = "Zdjęcie usunięte";
    } else {
        changeButton.innerText = "Usuń zdjęcie"
    }
});