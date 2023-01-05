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

boxes = document.querySelectorAll("div[class=box]")
boxes.forEach(element => {
    element.addEventListener("click", cambioColor)
});