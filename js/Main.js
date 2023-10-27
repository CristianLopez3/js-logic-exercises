
document.addEventListener("DOMContentLoaded", (e) => {

    const d = document;
    let numberValue = d.getElementById("number");
    let agregar = d.getElementById("agregar");
    let ordenar = d.getElementById("ordenar");
    let resultBefore = d.getElementById("result-before");
    let resultAfter = d.getElementById("result-after");
    let limpiarArray = d.getElementById("reset");

    let loading = d.getElementById("loading"); // div de animación loading;

    let values = [];
    console.log(values);


    // Evento para agregar elementos al array values 
    agregar.addEventListener("click", (e) => {

        e.preventDefault();


        if (numberValue.value === null || numberValue.value === "") {
            return ; 
        }

        loading.style.animation = "none";
        loading.style.display = "none";
        values.push(numberValue.value);
        resultBefore.textContent = `Antes de ordenar:  ${values.join(", ")}`;
        numberValue.value = ""


    })


    // Evento para ordenar el array - values
    ordenar.addEventListener("click", (e) => {

        e.preventDefault();

        for (let i = 0, size = values.length; i < size; i++) {
            for (let j = 0; j < size - 1 - i; j++) {
                if (values[j] > values[j + 1]) {
                    let temp = values[j + 1];
                    values[j + 1] = values[j];
                    values[j] = temp;
                }
            }
        }

        console.log(values.toString())
        resultAfter.textContent = ` Despues de ordenar con Bubble Sort:  ${values.join(", ")}`;

    })


    // Evento para limpiar el array y los textos
    limpiarArray.addEventListener("click", (e) => {
        values = [];
        resultBefore.textContent = "";
        resultAfter.textContent = "";
        loading.style.animation = "rotar 2s infinite ease-in-out";
        loading.style.display = "block";
    });

    // setInterval(() => {
    //     console.log(values);
    // }, 3000)


})