var container = document.querySelector(".container");
var cookie = document.getElementById("cookie");
var score = document.getElementById("score");
var highscore = document.getElementById("highscore");
var save = document.getElementById("save");
var reset = document.getElementById("reset");

cookie.onmouseover = function () {
  container.style.backgroundColor = "rgb(161, 211, 176)";
  setTimeout(function(){container.style.backgroundColor = "white";},3000);
  cookie.style.transform = "scale(1.2)";
  cookie.style.cursor = "pointer";
};
cookie.onmouseleave = function () {
  container.style.backgroundColor = "white";
  cookie.style.transform = "scale(1)";
  cookie.style.cursor = "default";
};

cookie.onclick = function () {
    currentScore = parseInt(score.innerText);
    score.innerText = currentScore+1;
    currentScore = parseInt(score.innerText);
   var h1 = document.createElement('h1');
   container.appendChild(h1);
   h1.innerText = "+1";
   h1.classList.add("count");
   setInterval(function(){
    container.removeChild(h1);
},5000)
};

document.onblur = function(){
    score.innerText = parseInt(currentScore/2);
}

save.onclick = function(){
    highscore.innerText = currentScore;
}

reset.onclick = function(){
    currentScore = 0;
    score.innerText = 0;
}
