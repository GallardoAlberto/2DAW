
let num;
let par = 0;
let impar = 0;

function parImpar(){
    
    if(num % 2 == 0){
        par++;
        return console.log(num + "- par");

    }else{
        impar++;
        return console.log(num + "- impar");

    }
}

function mas(){
    if(par > impar){
        console.log("Más pares(" + par + ") que impares(" + impar + ")");
    }else{
        console.log("Más impares(" + impar + ") que pares(" + par + ")");
    }
}

for (let i = 0; i < 500; i++) {
    num = Math.round(Math.random() * 10000 + 1);
    console.log(num);

    parImpar();

}

mas()