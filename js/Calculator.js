const d = document;

// Elementos del dom
let addUsuario = d.getElementById("users");
let cantidadUsuarios = d.getElementById("usuarios");

let pantalla = d.getElementById("pantalla");

// Numeros 
let uno = d.getElementById("uno");
let dos = d.getElementById("dos");
let tres = d.getElementById("tres");
let cuatro = d.getElementById("cuatro");
let cinco = d.getElementById("cinco");
let seis = d.getElementById("seis");
let siete = d.getElementById("siete");
let ocho = d.getElementById("ocho");
let nueve = d.getElementById("nueve");
let cero = d.getElementById("cero");

let numbers = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve];



// Variables  locales
let contador = 0;
let contenido = "";


numbers.forEach((el) => {
    el.dataset.valor = contador;
    contador++;
    console.log(el.dataset.valor)
})

contador = 0; // reiniciamos el valor del contador

const nuevoUsuario = () => {
    contador++;
    if (contador <= 4) cantidadUsuarios.textContent = `${contador}`;
}


// Operaciones 
let sumar = d.getElementById("sumar");
sumar.dataset.operacion = "+";
let multiplicar = d.getElementById("multiplicar");
multiplicar.dataset.operacion = "*";
let dividir = d.getElementById("dividir");
dividir.dataset.operacion = "/";
let restar = d.getElementById("restar");
restar.dataset.operacion = "-";
let modulo = d.getElementById("modulo");
modulo.dataset.operacion = "%";
let operaciones = [sumar, multiplicar, dividir, restar, modulo];

// Asignar dataset a las operaciones






// Funcion para mostrar los numeros presionados en pantalla

const clickOperation = () => {
    operaciones.forEach((el) => el.addEventListener("click", (e) => {
        pantalla.textContent = "";
        contenido = el.dataset.operacion;
        if (pantalla.textContent === "") pantalla.textContent = contenido;
        console.log(pantalla.textContent);
    }))
}


const clickNumber = () => {

    contenido = "";
    
    numbers.forEach((el) => {
        pantalla.textContent = "";
        el.addEventListener("click", (e) => {
            pantalla.textContent = "";
            if (pantalla.textContent === "") {
                contenido += `${el.dataset.valor}`;
                pantalla.textContent = contenido;
                console.log(pantalla.textContent);
            }

        })
    })
}

clickNumber();
clickOperation();




addUsuario.addEventListener("click", e => nuevoUsuario())