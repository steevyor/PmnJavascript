let text = new Array(5)
text[0] = `1to`
text[1] = `2to`
text[2] = `3to`
text[3] = `4to`
text[4] = `5to`

let colors = new Array(3)
colors[0] = "red"
colors[1] = "blue"
colors[2] = "purple"

window.addEventListener("load", function() {
    let btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        //clearTimeout(t)
        t = setInterval(rep,5000,btn);
    })
    
})

function rep(b){
    b.innerHTML = text[getRandomInt(5)]
    b.style.backgroundColor = colors[getRandomInt(3)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}