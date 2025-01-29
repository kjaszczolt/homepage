{
    const welcome = () => {
        console.log("Hejka! Pozdrawiam wszystkich odwiedzających developerów!");
    }

    welcome();
}

const button = document.querySelector(".button");

{
    const removePhotoItemClick = () => {
        const buttonItem = document.querySelector(".js-buttonItem");
        const photoItem = document.querySelector(".js-photoItem");
        const changeButton = document.querySelector(".js-changeButton");

        buttonItem.addEventListener("click", () => {
            photoItem.remove();

            if (photoItem.remove) {
                changeButton.innerText = "Zdjęcie usunięte";
            } else {
                changeButton.innerText = "Usuń zdjęcie"
            }
        });
    }

    removePhotoItemClick();

}
