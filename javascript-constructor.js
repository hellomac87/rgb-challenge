function game() {
    this.score = 0; // 기본 score
    this.answer = 0;
    this.scoreElem = document.getElementById("score");
    this.overlayScoreElem = document.getElementById("overlayScore");
    this.circles = document.querySelectorAll(".answers li");
    this.question = document.getElementById("question");
    this.nextBtn = document.getElementById("nextBtn");
    this.againBtn = document.getElementById("againBtn");
    this.wrongDiv = document.querySelector('.wrong');
    this.correctDiv = document.querySelector(".correct");
    this.overlayDiv = document.querySelector(".overlay");

    this.nextBtn.addEventListener('click', (e) => {
        // next 버튼 클릭시
        this.newStage();
        this.correctDiv.style.display = 'none';
        this.overlayDiv.style.display = "none";
        this.circles.forEach(circle => {
            circle.classList.remove('show');
        });
    });
    this.againBtn.addEventListener("click", e => {
        // play again 버튼 클릭시
        this.newStage();
        this.wrongDiv.style.display = "none";
        this.overlayDiv.style.display = "none";
        this.circles.forEach(circle => {
          circle.classList.remove("show");
        });
    });

    this.circles.forEach((circle, index) => {
        circle.addEventListener("click", e => {
            if (this.answer === index) {
                // ok
                this.correctDiv.style.display = 'block';
                this.overlayDiv.style.display = "block";
                this.handleScore();
            } else {
                // no
                console.log("no");
                this.wrongDiv.style.display = "block";
                this.overlayDiv.style.display = "block";
            }
            circle.classList.add("show");
        });
    });

  this.newStage = function() {
    const options = [
      this.createRandomColor(),
      this.createRandomColor(),
      this.createRandomColor()
    ];

    this.answer = Math.floor(Math.random() * 3);

    this.circles.forEach((circle, index) => {
        circle.style.backgroundColor = options[index];
        circle.classList.remove('active');
    });

    this.question.textContent = options[this.answer];
  };

  this.createRandomColor = function() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  this.handleScore = function(){
      this.score += 100;
      this.scoreElem.textContent = this.score;
      this.overlayScoreElem.textContent = this.score;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const game1 = new game();
  game1.newStage();
});
