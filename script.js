window.onload = function() {
    const loader = document.getElementById('loader');
    const loginContainer = document.getElementById('login-container');

    setTimeout(() => {
        loader.style.display = 'none';
        loginContainer.style.display = 'block';
    }, 2000);
}