//Dice array 
let diceArray = []
//for random color on the why button to only allow the background color change to work if you've clicked the why button
let advanced = false;

//class Die that stores the dice to be able to randomly throw out a 1-6 number die on a click for Genterate Die button. On a single click on each indivdual die the die will reRoll. On a dblclick the indvidual die will dissapear, and will remove the value from the console.log of the Add Em Up button sum. When you mouse over an indidual die the dice's background will randomly change color. 
class Die {
    constructor() {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div = $(`<div class= "die">${this.value}</div>`);
        $('.dice-container').append(this.div);
        this.div.append(this.dieFace());
        this.div.click(() => {
            this.roll();
        });
        this.div.dblclick(() => {
            this.div.remove();
            let i = diceArray.indexOf(this);
            diceArray.splice(i, 1);
        });
        this.div.mouseover(() => {
            if (advanced === true) {
                this.div.css('background-color', this.randomColor())

            }
        })
    };
//RandomColor math for background change on the dice
    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ' , ' + g + ' , ' + b + ')';
    }
//roll is the indvidual dice single click will reRoll die
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.value)
        this.div.append(this.dieFace());
    }
    //dieFace adds a die cube into the indivual dice to match the number in the die
    dieFace(unicode) {
        if (this.value === 1) {
            unicode = '&#9856;';
            return unicode;
        } else if (this.value === 2) {
            unicode = '&#9857;';
            return unicode;
        } else if (this.value === 3) {
            unicode = '&#9858;';
            return unicode;
        } else if (this.value === 4) {
            unicode = '&#9859;';
            return unicode;
        } else if (this.value === 5) {
            unicode = '&#9860;';
            return unicode;
        } else if (this.value === 6) {
            unicode = '&#9861;';
            return unicode;
        }
    }
};
//reRoll button reRolls all dice that have been generated
$('#reRoll').click(() => {
    diceArray.forEach((pizza) => {
        pizza.roll()
    })
//pop it the Generate Die button to generate a new dice everytime the button is clicked
})
$('#pop').click(() => {
    let pop = new Die()
    diceArray.push(pop)
    console.log(diceArray)
})
//Add Em Up button will add all the generated dice and console log the sum
$('#add').click(() => {
    let add = 0;
    for (let i = 0; i < diceArray.length; i++) {
        add += diceArray[i].value;
    }
    console.log(add);
})
//IF the Why button is click it allows the background color of the die to be randomly changed to a new color
$("#hide").click(() => {
    advanced = true
})