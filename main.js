let btn = document.querySelector("button");

var random = Math.ceil(Math.random() * 200);
fetchAdvice(random);

btn.onclick = function () {
    random = Math.ceil(Math.random() * 200);
    fetchAdvice(random);
}

function fetchAdvice(randomNum) {
    fetch(`https://api.adviceslip.com/advice/${randomNum}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector("q").textContent = data.slip.advice;
        document.querySelector(".advice-number").textContent = data.slip.id;
    });
}