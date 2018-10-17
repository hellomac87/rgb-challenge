const scoreElem = document.getElementById("score");
const overlayScoreElem = document.getElementById("overlayScore");
const circles = document.querySelectorAll(".answers li");
const question = document.getElementById("question");
const nextBtn = document.getElementById("nextBtn");
const againBtn = document.getElementById("againBtn");
const wrongDiv = document.querySelector('.wrong');
const correctDiv = document.querySelector(".correct");
const overlayDiv = document.querySelector(".overlay");

let score = 0; // 기본 score
let answer = 0;

nextBtn.addEventListener('click', (e) => {
    // next 버튼 클릭시
    newStage();
    correctDiv.style.display = 'none';
    overlayDiv.style.display = "none";
    circles.forEach(circle => {
        circle.classList.remove('show');
    });
});

againBtn.addEventListener("click", e => {
    // play again 버튼 클릭시
    
    newStage();
    wrongDiv.style.display = "none";
    overlayDiv.style.display = "none";
    circles.forEach(circle => {
        circle.classList.remove("show");
    });
    score = 0;
    handleScore();
});

circles.forEach((circle, index) => {
    circle.addEventListener("click", e => {
        if (answer === index) {
            // ok
            correctDiv.style.display = 'block';
            score += 100;   
        } else {
            // no
            wrongDiv.style.display = "block";
        }
        overlayDiv.style.display = "block";
        circle.classList.add("show");
        handleScore();
    });
});

newStage = function () {
    const options = [
        createRandomColor(),
        createRandomColor(),
        createRandomColor()
    ];

    answer = Math.floor(Math.random() * 3);

    circles.forEach((circle, index) => {
        circle.style.backgroundColor = options[index];
        circle.classList.remove('active');
    });

    question.textContent = options[answer];
};

createRandomColor = function () {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
};

handleScore = function () {
    scoreElem.textContent = score;
    overlayScoreElem.textContent = score;
}


document.addEventListener("DOMContentLoaded", function () {
    newStage();
});
