let answer = Math.floor(Math.random() * 3);

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
}

document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.addEventListener("click", e => {
        if (answer === index) {
            alert("ok");
        } else {
            alert("no");
        }
        newStage();
    });
});

function newStage() {
    const options = [randomColor(), randomColor(), randomColor()];

    answer = Math.floor(Math.random() * 3);

    document.querySelectorAll(".option").forEach((optionEl, index) => {
        optionEl.style.backgroundColor = options[index];
    });
    document.querySelector(".color-text").textContent = options[answer];
}

newStage();
