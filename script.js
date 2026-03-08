const score = document.querySelector('#score')
const timer = document.querySelector('#time')
const squares = document.querySelectorAll('.square')

let game = null
let time = 60

function move() {

    squares.forEach(square => {
        square.classList.remove('mole')
    })

    const random = Math.floor(Math.random() * 9)

    squares[random].classList.add('mole')

    time--
    timer.innerText = time

    if(time == 0){
        clearInterval(game)
    }
}

game = setInterval(move,1000)