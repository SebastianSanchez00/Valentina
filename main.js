onload = () =>{
    document.body.classList.remove("container");

    let audio = document.getElementById("miAudio");
            audio.currentTime = 78; 
             audio.play();
};

function cargar(){
    startTransition();
    alert("Así es, no tienes mas alternativas q decir q si")
    setTimeout(function() {
        window.location.href = "/flower.html"
     }, 3000);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; 
    document.querySelector(".hearts-container").appendChild(heart);

  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function startTransition() {
    let count = 0;
    let interval = setInterval(() => {
        createHeart();
        count++;
        if (count >= 50) { 
            clearInterval(interval);
          
        }
    }, 100);
}
