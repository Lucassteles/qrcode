// Seletores (baseado no seu HTML)
const container = document.querySelector(".container");
const input = document.querySelector("#qr-input");
const button = document.querySelector("#qr-form button");
const qrImg = document.querySelector("#qr-code img");

// Função para gerar o QR Code
function gerarQRCode() {
  const valor = input.value.trim();

  if (!valor) {
    // Se estiver vazio, esconde o QR
    container.classList.remove("active");
    qrImg.src = "img/qrcode.png"; // volta pro placeholder se quiser
    return;
  }

  // Mostra o bloco (seu CSS usa .container.active)
  container.classList.add("active");

  // API simples que gera imagem PNG do QR Code
  const tamanho = 200;
  const url =
    "https://api.qrserver.com/v1/create-qr-code/?" +
    "size=" + tamanho + "x" + tamanho +
    "&data=" + encodeURIComponent(valor);

  // Troca a imagem
  qrImg.src = url;
  qrImg.alt = "QR Code para: " + valor;
}

// Clique no botão
button.addEventListener("click", (e) => {
  e.preventDefault();
  gerarQRCode();
});

// Enter no input também gera
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    gerarQRCode();
  }
});

// Se apagar o texto, esconde o QR
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    container.classList.remove("active");
    qrImg.src = "img/qrcode.png";
    qrImg.alt = "QR CODE";
  }
});
