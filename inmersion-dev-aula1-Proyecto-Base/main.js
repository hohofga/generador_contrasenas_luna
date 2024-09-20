let cantidad = document.getElementById('cantidad'); //tipos de datos
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';



function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){        
        alert("La cantidad de caracteres tiene que ser mayor e igual que 8");
    }

    let password ='';

    for(let i=0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    contrasena.value = password;
}























