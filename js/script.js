{
    const picture = document.querySelector(".js-picture");
    const nextButton = document.querySelector(".js-nextButton");
    const previousButton = document.querySelector(".js-previousButton");

    const welcome = () => {
        console.log("Witaj sprytny programisto!");
    }

    const onNextButtonClick = () => {
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
    }

    const onPreviousButtonClick = () => {
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
    }

    welcome();
    onNextButtonClick();
    onPreviousButtonClick();
}