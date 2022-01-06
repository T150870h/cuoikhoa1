const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; (1)
const hexBtn = document.querySelector('.hexBtn'); (2)
const bodyBcg = document.querySelector('body'); (3)
const hex = document.querySelector('.hex'); (4)

hexBtn.addEventListener('click', getHex); (5)

function getHex() {
    let hexCol = '#'; (6)
    for(let i = 0; i < 6; i++) { (7)
        let random = Math.floor(Math.random()*hexNumbers.length); (8)
        hexCol += hexNumbers[random]; (9)
    }
    bodyBcg.style.backgroundColor = hexCol; (10)
    hex.innerHTML = hexCol; (11)
}