let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector('h2')
let btn = ['yellow', 'red', 'blue', 'green']


// adding event listener to start the game

document.addEventListener('keydown', function () {
    if (started === false) {
        console.log('game started')
        started = true
        levelUp()
    }
})

// creating a function to flash the button.

function buttonFlash(btn) {
    btn.classList.add("flash")
    // setting time to remove the flash
    setTimeout(() => {
        btn.classList.remove("flash")

    }, 1000);

}

function levelUp() {
    //  resetting the user sequence
    userSeq = [];
    level++;
    h2.innerHTML = ` Level : ${level}`;

    // random btn choose 
    let randIdx = Math.floor(Math.random() * 3)
    let randColor = btn[randIdx]
    let randbtn = document.querySelector(`.${randColor}`)
    buttonFlash(randbtn);
    // adding the random color to game sequence 
    gameSeq.push(randColor)

}

// checking the user answer


function checkAnswer(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        reset()
        h2.innerText = `Game Over, Press any key to restart , your scored was ${level}`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(() => {
        document.querySelector('body').style.backgroundColor='black';

            
        }, 150);
    }
}


// creating button press functionality

function btnPress() {
    let btn = this;
    buttonFlash(btn)
    // adding user pressed button to user sequence 
    let userColor = btn.getAttribute('id')
    userSeq.push(userColor)
    checkAnswer(userSeq.length-1)


}

let allBtn = document.querySelectorAll('.btn')
for (let b of allBtn) {
    b.addEventListener('click', btnPress)
}

function reset(){
    started = false;
    gameSeq =[]
    userSeq = []
    level = 0
}