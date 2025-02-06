// Sincronizar las letras con la canción
var audio = document.querySelector("audio");


function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️"; // Puedes cambiarlo a otro emoji si quieres
  document.querySelector(".hearts-container").appendChild(heart);

  // Posición aleatoria en la parte inferior
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  // Elimina el corazón cuando termina la animación
  setTimeout(() => {
      heart.remove();
  }, 4000);
}

function startTransition() {
  let count = 0;
  let interval = setInterval(() => {
      createHeart();
      count++;
      if (count >= 400) { 
          clearInterval(interval);
       
      }
  }, 100);
}

startTransition()


function descargarImagen() {
  const link = document.createElement("a");
  link.href = "img/paper.png"; // URL de la imagen (cámbiala por la tuya)
  link.download = "paper.png"; // Nombre del archivo a descargar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
