var color

document.addEventListener('keydown', function (event) {
    switch(event.key){
        case "a":
            color ="red"
            break
        case "s":
            color ="green"
            break
        case "d":
            color ="yellow"
            break
        default:
            color = null
            break
    }
    alert(color)
})

function cambioColor(event){
    if(color != null)
        event.target.style.backgroundColor = color
}

document.getElementById("ele1").addEventListener("click", cambioColor)
document.getElementById("ele2").addEventListener("click", cambioColor)
document.getElementById("ele3").addEventListener("click", cambioColor)
document.getElementById("ele4").addEventListener("click", cambioColor)