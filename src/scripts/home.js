const containerHerois = document.querySelector('.container__heros');
let dadosDosherois;

const getDadosFromApi = () => {
    const dados = [
        {
            name: 'Mindie',
            type: 'Bruxa',
            avatar: '../assets/bruxa.png',
            alt: 'Bruxa do Adventure Magic JS'
        },
        {
            name: 'Zoe',
            type: 'Espadachim',
            avatar: '../assets/espadachim.png',
            alt: 'Espadachim do Adventure Magic JS'
        },
        {
            name: 'Arthur',
            type: 'Mago',
            avatar: '../assets/mago.png',
            alt: 'Mago do Adventure Magic JS'
        },
    ];

    return dados;
}

function setaImagens(imagemDoHeroi, imagemDeFundo, afastarADireita) {
    let heroi = document.querySelector('.container__images');
    let HeroiBackground = document.querySelector('.container__images img');

    heroi.style.setProperty('--image-hero', imagemDoHeroi);
    HeroiBackground.setAttribute('src', imagemDeFundo);
    HeroiBackground.style.right = afastarADireita;
}

function geraCardsHeroi() {
    // dados dos personagens
    dadosDosherois = getDadosFromApi();
    
    // cria os cards
    dadosDosherois.forEach((heroi, index) => {
        if (index === 0) {
            containerHerois.innerHTML += `
                <button class="hero activad">
                    <img src="${heroi.avatar}" alt="${heroi.alt}">
                    ${heroi.type} - ${heroi.name}
                </button>
            `;
        } else {
            containerHerois.innerHTML += `
                <button class="hero">
                    <img src="${heroi.avatar}" alt="${heroi.alt}">
                    ${heroi.type} - ${heroi.name}
                </button>
            `;
        }
    });
}

function removeClasseAtivacao(tipoDoHeroi) {
    const botoesDeHerois = document.querySelectorAll('.container__heros .hero');

    botoesDeHerois.forEach(botao => {
        let textoDoBotao = botao.innerText.toLocaleLowerCase();

        if (textoDoBotao != tipoDoHeroi) {
            botao.classList.remove('activad');
        }
    });

}

function selecionarHeroi() {
    const botoesDeHerois = document.querySelectorAll('.container__heros .hero');
    
    botoesDeHerois.forEach(botao => {
        let textoDoBotao = botao.innerText.toLocaleLowerCase();

        botao.addEventListener('click', function() {
            if (!botao.classList.contains('activad')) {
                if (textoDoBotao.indexOf('bruxa') !== -1) {
                    botao.classList.add('activad');
                    setaImagens("url(../../assets/bruxa.png)", "../assets/bruxa.png", "-200px");
                    removeClasseAtivacao(textoDoBotao);
                } else if (textoDoBotao.indexOf('espadachim') !== -1) {
                    botao.classList.add('activad');
                    setaImagens("url(../../assets/espadachim.png)", "../assets/espadachim.png", "-400px");
                    removeClasseAtivacao(textoDoBotao);
                } else if (textoDoBotao.indexOf('mago') !== -1) {
                    botao.classList.add('activad');
                    setaImagens("url(../../assets/mago.png)", "../assets/mago.png", "-500px");
                    removeClasseAtivacao(textoDoBotao);
                }
            }
        });
    });
}

function comecarJogo() {}

geraCardsHeroi();
selecionarHeroi();