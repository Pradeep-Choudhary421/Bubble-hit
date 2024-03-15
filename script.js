function makeBubble () {
    var clutter = "";
for( let i=1 ; i <= 50; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubbles"> ${(rn)} </div>`;
}


document.querySelector(".bottom").innerHTML = clutter;
}

var score = 60;
function scored () {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}
var timer = 1;
function runtime () {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timeint').textContent = timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector(".bottom").innerHTML = `<h1>Time's Up </h1>  <h3 id="overall">Your Score ${score} <br/> <button id="reset">Reset</button> `;
            document.querySelector("#reset").addEventListener("click", function() {
                location.reload();
            });
        }

    },1000);

}

var hitv = 0;
function hitval () {
     hitv = Math.floor(Math.random()* 10);
    document.querySelector("#hitval").textContent = hitv;
}


document.querySelector(".bottom").addEventListener("click" , function (det) {
    var clickednum = Number(det.target.textContent);
    if (clickednum == hitv) {
        scored();
        makeBubble();
        hitval();
    }


})


makeBubble();
runtime();
hitval();