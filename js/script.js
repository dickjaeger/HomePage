console.log("Witaj sprytny programisto!")

let previousButton = document.querySelector(".js-previousButton");
let nextButton = document.querySelector(".js-nextButton");
let picture = document.querySelector(".js-picture");

nextButton.addEventListener("click", () => {
    switch (picture.getAttribute("src")) {
        case "images/my_picture_1.jpg":
            picture.setAttribute("src", "images/my_picture_2.jpg");
            previousButton.classList.remove("hide");
            nextButton.classList.remove("hide");
            break;
        case "images/my_picture_2.jpg":
            picture.setAttribute("src", "images/my_picture_3.jpg");
            previousButton.classList.remove("hide");
            nextButton.classList.add("hide");
            break;
        default:
            previousButton.classList.remove("hide");
            nextButton.classList.add("hide");
    }
})

previousButton.addEventListener("click", () => {
    switch (picture.getAttribute("src")) {
        case "images/my_picture_2.jpg":
            picture.setAttribute("src", "images/my_picture_1.jpg");
            previousButton.classList.add("hide");
            nextButton.classList.remove("hide");
            break;
        case "images/my_picture_3.jpg":
            picture.setAttribute("src", "images/my_picture_2.jpg");
            previousButton.classList.remove("hide");
            nextButton.classList.remove("hide");
            break;
        default:
            previousButton.classList.add("hide");
            nextButton.classList.remove("hide");
    }
})