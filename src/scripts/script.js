
function login(e) {
    e.preventDefault();
    let email = document.getElementById('input-email').value;
    let senha = document.getElementById('input-password').value;

    if (email.trim() && senha.trim()) {
        window.location.href = './src/pages/home.html';
    } else {
        alert("Preencha todos os campos corretamente!")
    }
}
