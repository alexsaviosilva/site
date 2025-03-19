const testimonials = [
  { title: "Cleber Caetano", text: '"Alex para mim é um talento. Extremamente inteligente e hábil na execução das tarefas. O trabalho era desafiador e em curto espaço de tempo. Alex entrou para me ajudar como especialista em PBI, porém ele fez muito mais que isso. Juntos entendemos o processo e identificamos gaps para estruturar o melhor modelo. Esse trabalho de sucesso foi muito em virtude das seguintes competências que destaco no Alex: poder analítico, visão sistêmica e empatia com cliente sendo uma referência."' },
  { title: "Dayanne Vieira", text: '"Eu e o Alex tivemos uma jornada de grandes desafios juntos. Desde que ingressou na equipe, ainda como estagiário, Alex se destacou pela pró-atividade, alta capacidade analítica e pelo ótimo relacionamento com os clientes e colegas de trabalho. Assumiu grandes responsabilidades e sempre realizou entregas com excelência. Não atoa teve uma rápida curva de progressão na carreira. Trabalhar com o Alex foi um presente pra mim."' }
];

let currentIndex = 0;

const titleEl = document.getElementById("carousel-title");
const textEl = document.getElementById("carousel-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateCarousel(index) {
  titleEl.textContent = testimonials[index].title;
  textEl.textContent = testimonials[index].text;
}

// Atualiza o carrossel assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
  updateCarousel(0);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateCarousel(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateCarousel(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});