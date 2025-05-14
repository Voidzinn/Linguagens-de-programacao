let tituloAlterado = false;
document.getElementById("btn1").addEventListener("click", () => {
  const titulo = document.getElementById("titulo");
  if (!tituloAlterado) {
    titulo.textContent = "Título Alterado!";
    titulo.style.color = "blue";
  } else {
    titulo.textContent = "Título Original";
    titulo.style.color = "#cdd6f4";
  }
  tituloAlterado = !tituloAlterado;
});

let imagemAlternada = false;
document.getElementById("btn2").addEventListener("click", () => {
  const img = document.getElementById("imagem");
  if (!imagemAlternada) {
    img.src = "imgs/cat.png";
    img.style.width = "200px";
  } else {
    img.src = "imgs/camel.png";
    img.style.width = "150px";
  }
  imagemAlternada = !imagemAlternada;
});

let texto1Alternado = false;
document.getElementById("btn3").addEventListener("click", () => {
  const texto1 = document.getElementById("texto1");
  if (!texto1Alternado) {
    texto1.textContent = "Texto do botão 3 alterado!";
    texto1.style.backgroundColor = "blue";
  } else {
    texto1.textContent = "Texto do botão 3";
    texto1.style.backgroundColor = "transparent";
  }
  texto1Alternado = !texto1Alternado;
});

const texto2 = document.getElementById("texto2");
const texto2Botoes = document.querySelectorAll(".texto2-btn");

texto2Botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    texto2.textContent = botao.textContent;
  });
});