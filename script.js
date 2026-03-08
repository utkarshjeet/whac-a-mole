const score = document.querySelector('#score')
const timer = document.querySelector('#time')
const squares = document.querySelectorAll('.square')

let game = null
let time = 60
let result = 0
let clickId 
let random 


function move() {

    squares.forEach(square => {
        square.classList.remove('mole')

    })

    random = Math.floor(Math.random() * 9) 

    squares[random].classList.add('mole')

    time--
    timer.innerText = time

   
    if(time == 0){
        clearInterval(game)
        result = 0;
    }
}


squares.forEach(square => {{

    square.addEventListener('mousedown' , event => {
       clickId = event.target.id    
        if(random == clickId-1 )
    {
        result++
        score.innerText = result
    }

    })
    
    
}})

game = setInterval(move,1000)