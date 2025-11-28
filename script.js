const imagensCarro = {
    vermelho: "assets/car-vermelho.webp",
    vinho: "assets/car-vinho.jpeg",
    cinza: "assets/car-cinza.webp"
};

// pega os elementos
const carImg = document.getElementById('carImg');
const corCarro = document.getElementById('corCarro');

// função que muda a imagem conforme a cor
function atualizarImagem() {
    const corSelecionada = corCarro.value.toLowerCase(); // já pega em minúsculo

    // busca no objeto a imagem correta da cor
    const novaImagem = imagensCarro[corSelecionada];

    // troca a imagem
    carImg.src = novaImagem;
}

// quando o usuário mudar a cor
corCarro.addEventListener('change', atualizarImagem);

// define uma cor padrão ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    corCarro.value = "Vermelho"; // mantém selecionado no HTML
    atualizarImagem(); // carrega a imagem automaticamente
});
