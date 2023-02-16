let span = document.getElementsByTagName('span');
let cont = 0;

document.addEventListener('keydown', (event) =>{
    if(event.key == 'ArrowUp'){
        cont++;
        if(cont >= 120){
            cont = 120;
        }
        span[0].innerHTML = cont;
    }
    if(event.key == 'ArrowDown'){
        cont--;
        if(cont <= 0){
            cont = 0;
        }
        span[0].innerHTML = cont;
    }
})