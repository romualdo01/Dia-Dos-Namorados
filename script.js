
// Contador de tempo
const inicio = new Date("2023-10-01T00:00:00");
const contador = document.getElementById("contador");

function atualizarContador() {
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    contador.innerHTML = `${1009
    } dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// Emojis caindo
const heartsContainer = document.querySelector(".hearts");
setInterval(() => {
    const emoji = document.createElement("div");
    emoji.innerText = "💙";
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 24 + 16 + "px";
    emoji.style.animation = "fall 5s linear forwards";
    heartsContainer.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
}, 300);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Iniciar o slideshow
if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Troca a cada 3 segundos
}
