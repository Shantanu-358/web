var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

// Get the form data
const form = document.querySelector('#register');
const formData = new FormData(form);

// Convert the form data to JSON
const data = {};
for (const [key, value] of formData.entries()) {
    data[key] = value;
}
const jsonData = JSON.stringify(data);

// Send the data to the server
const xhr = new XMLHttpRequest();
xhr.open('POST', '/register');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
    if (xhr.status === 200) {
        // Save the response to local storage
        const response = JSON.parse(xhr.responseText);
        localStorage.setItem('user', JSON.stringify(response));

        // Redirect to the new page
        window.location.href = '/list';
    }
};
xhr.send(jsonData);