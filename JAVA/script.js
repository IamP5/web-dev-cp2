document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === '1234' && password === '1234') {
        alert('Login successful!, Welcome!');
    } 
    else {
        document.getElementById('error-message').innerText = 'Invalid username or password.';
    }

});