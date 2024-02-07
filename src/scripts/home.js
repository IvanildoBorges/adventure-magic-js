
function selecionarHeroi(tipoDePersonagem) {
    let heroi = document.querySelector('.container__images');
    let HeroiBackground = document.querySelector('.container__images img');

    if (tipoDePersonagem === 'bruxa') {
        heroi.style.setProperty('--image-hero', "url(../../assets/bruxa.png)");
        HeroiBackground.setAttribute('src', '../assets/bruxa.png');
        HeroiBackground.style.right = '-200px';
    } else if (tipoDePersonagem === 'espadachim') {
        heroi.style.setProperty('--image-hero', "url(../../assets/espadachim.png)");
        HeroiBackground.setAttribute('src', '../assets/espadachim.png');
        HeroiBackground.style.right = '-400px';
    } else if (tipoDePersonagem === 'mago') {
        heroi.style.setProperty('--image-hero', "url(../../assets/mago.png)");
        HeroiBackground.setAttribute('src', '../assets/mago.png');
        HeroiBackground.style.right = '-500px';
    }
}
