import "./style.sass";

let isDark = false;

const handleClickEvent = () => {
    isDark = !isDark;
    updateClasses();
}

const updateClasses = () => {
    const darkElements = document.getElementsByClassName("has-dark-mode");
    for (const elem of darkElements) {
        elem.classList.toggle("is-dark");
    };
}

const mainElem = document.getElementsByClassName("main")[0];
mainElem.addEventListener("click", handleClickEvent);
