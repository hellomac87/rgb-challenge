function game(){
    this.circles = document.querySelectorAll(".answers li");
    
    this.inputColor = function(){
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].style.backgroundColor = this.randomColor();
        }
    }
    
    this.randomColor = function(){
        const cadidate = '0123456789ABCDEF';
        let colorCode = '#'

        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * cadidate.length);;
            colorCode += cadidate[index];
        }
        return colorCode;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const game1 = new game();
    
    game1.inputColor();
});