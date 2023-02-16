// (https://source.unsplash.com/random)

let h1 = document.getElementById('h1');

keyAlt = false;
keyF12 = false;

document.addEventListener('keydown', function(event){
    console.log(event.key);
    if (event.key === "Alt"){
        keyAlt = true;
    }
    if (event.key === "F12"){
        keyF12 = true;
    }

    
    if(keyAlt == true && keyF12 == true){
        h1.style.backgroundImage = 'url(https://source.unsplash.com/random)';
    }

});


