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
let numero1 = null;
let numero2 = null;
let contador = 0;
let contenido = "";
let operacion = ""; // operacion para manipular en la funcion del igual por medio de un switch case.

numbers.forEach((el) => {
  el.dataset.valor = contador;
  contador++;
  // console.log(el.dataset.valor)
});

contador = 0; // reiniciamos el valor del contador

const nuevoUsuario = () => {
  contador++;
  if (contador <= 4) cantidadUsuarios.textContent = `${contador}`;
};

// Operaciones
// Asignar dataset a las operaciones
let sumar = d.getElementById("sumar");
sumar.dataset.operacion = "+";

let multiplicar = d.getElementById("multiplicar");
multiplicar.dataset.operacion = "*";

let dividir = d.getElementById("dividir");
dividir.dataset.operacion = "/";

let restar = d.getElementById("restar");
restar.dataset.operacion = "-";

let modulo = d.getElementById("modulo");
modulo.dataset.operacion = "MOD";

let cuadrado = d.getElementById("cuadrado");
cuadrado.dataset.operacion = "^";

let porcentaje = d.getElementById("porcentaje");
porcentaje.dataset.operacion = "%";

let raiz = d.getElementById("raiz");
porcentaje.dataset.operacion = "√";

let operaciones = [
  sumar,
  multiplicar,
  dividir,
  restar,
  modulo,
  porcentaje,
  cuadrado,
  raiz,
];

const limpiarPantalla = () => (pantalla.textContent = "");

let valor = ""; // valor asignado y manipulable.
const clickNumber = () => {
  // Verificar si la pantalla está vacía
  if (pantalla.textContent === "") {
    console.log(pantalla.textContent);
    // Iterar a través de los botones de números
    numbers.forEach((el) => {
      el.addEventListener("click", (e) => {
        // Obtener el valor del botón
        limpiarPantalla();
        console.log(`pantalla: ${pantalla.textContent}`);
        valor =
          valor === ""
            ? (valor += el.dataset.valor)
            : (valor += el.dataset.valor);
        // Mostrar el valor en la pantalla
        pantalla.textContent += valor;
        console.log("valor: " + valor);
      });
    });
  } else {
    // Si la pantalla no está vacía, borrar el contenido
    limpiarPantalla();
  }
};

// Funcion para mostrar los numeros presionados en pantalla
const clickOperation = () => {
  if (pantalla.textContent !== null || pantalla.textContent !== "") {
    operaciones.forEach((el) =>
      el.addEventListener("click", (e) => {
        operacion = el.dataset.operacion;
        numero1 = parseInt(pantalla.textContent); // asignamos el valor del  primer numero
        valor = ""; // devolvemos el valor a simples comillas.
        // console.log(pantalla.textContent);
        // console.log("numero 1 "+numero1);
        limpiarPantalla();
        contenido = el.dataset.operacion; // asignamos el valor del operador al contenido
        if (pantalla.textContent === "") pantalla.textContent = contenido; // mostramos el operador en pantalla.
      })
    );
  }
};

clickNumber();
clickOperation();

addUsuario.addEventListener("click", (e) => nuevoUsuario());

// Logica para el boton de igual
const igual = d.getElementById("igual");
igual.dataset.operacion = "=";

igual.addEventListener("click", (e) => {
  if (!(pantalla.textContent !== null) || !(pantalla.textContent !== ""))
    return;

  numero2 = parseInt(pantalla.textContent);
  let resultado;

  switch (operacion) {
    case "+":
      resultado = numero1 + numero2;
      break;

    case "-":
      resultado = numero1 - numero2;
      break;

    case "*":
      resultado = numero1 * numero2;
      break;

    case "/":
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
      } else {
        resultado = "División por cero";
      }
      break;

    case "MOD":
      resultado = numero1 % numero2;
      break;

    case "^":
      resultado = numero1 ** numero2;
      break;

    case "%":
      if (numero2 < 0 || numero2 > 100) resultado = "error";
      // Calcular el porcentaje
      resultado = (numero1 * numero2) / 100;
      break;

    case "√":
      resultado = numero1 ** numero2;
      break;

    default:
      resultado = "Operador no válido";
  }

  pantalla.textContent = resultado;
  // Reiniciamos los valores
  numero1 = resultado;
  numero2 = 0;
});

// limpiar pantalla
const limpiar = d.getElementById("limpiar");
limpiar.addEventListener("click", (e) => {
  numero1 = "";
  numero2 = "";
  valor = "";
  contenido = "";
  pantalla.textContent = "";
  limpiarPantalla();
});

// Desahibilidar la calcualdora cuando haya cuatro usuarios
if (cantidadUsuarios === 4) {
  const botones = document.querySelectorAll("button");

  // Agregar un manejador de eventos de clic a cada botón
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      // Deshabilitar todos los botones
      botones.forEach((b) => (b.disabled = true));

      // Habilitar el botón actual (el que se hizo clic)
      boton.disabled = false;
    });
  });
}
