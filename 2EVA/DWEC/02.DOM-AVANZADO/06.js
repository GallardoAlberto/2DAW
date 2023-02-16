let edad = document.querySelector('#edad');

    for (let i = 0; i < (edad.attributes).length; i++) {
        console.log(edad.attributes[i].name + " - " + edad.attributes[i].value);
    }
