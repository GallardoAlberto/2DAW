var logo = document.getElementById("logo-header");
logo.parentNode.removeChild(logo);

var main = document.getElementById("main-content");
main.appendChild(logo);