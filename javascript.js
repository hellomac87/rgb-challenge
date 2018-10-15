function game(){
    this.score = 0; // 기본 score
    this.scoreElem = document.getElementById("score"); 
    this.circles = document.querySelectorAll(".answers li");
    this.question = document.getElementById("question");

    this.init = function(){
        this.inputColor();
        this.setRGB();
        this.setScore();
    }

    this.inputColor = function(){
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].style.backgroundColor = this.createRandomColor();
            this.circles[i].addEventListener('click', this.clickColor);
        }
    }
    this.setRGB = function(){
        const questionRgb = this.circles[Math.floor(Math.random() * 3)];
        this.question.textContent = `${questionRgb.style.backgroundColor}`;
    }

    this.createRandomColor = function(){
        const cadidate = '0123456789ABCDEF';
        let colorCode = '#'

        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * cadidate.length);;
            colorCode += cadidate[index];
        }
        return colorCode;
    }

    this.setScore = function(){
        this.scoreElem.textContent = this.score;
    }

    this.clickColor = function(){
        console.log(this.style.backgroundColor);
        console.log(this.question);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const game1 = new game();

    game1.init();
});