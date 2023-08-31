// Script para la ventana emergente
var ventana = document.getElementById('miVentana'); // variable para obtener la ventana emergente
var cerrar = document.getElementsByClassName("cerrar")[0]; // variable para el boton cerrar

//funcion para mostrar la ventana emergente al cargar la pagina
window.onload = function() { 
    ventana.style.display ="block";
}

//funcion para cerrar la ventana emergente al hacer click en el boton cerrar
cerrar.onclick = function(){
    ventana.style.display = "none";
}

//
window.onclick = function(event){
    if(event.target === ventana){
        ventana.style.display = "none";
    }
}

/* NUMBERS */
// 1.- Hallar el valor de dos numeros
const numero1 = 10;
const numero2 = 20;
const numeroMaximo = Math.max(numero1, numero2);
console.log("El número más grande es: " + numeroMaximo);

// 2. Sumar, resstar, multiplicar y dividir
// --Sumar--
let a = 5;
let b = 9;
let suma = a + b;
console.log("El resultado de la suma es: "+ suma); 

// --Resta--
let a2 = 21;
let b2 = 9;
let resta = a2 - b2;
console.log("El resultado de la resta es: "+ resta); 

// --Multiplicacion--
let a3 = 5;
let b3 = 8;
let multiplicacion = a3 * b3;
console.log("El resultado de la multiplicacion es: "+ multiplicacion); 

// --Division--
let a4 = 245;
let b4 = 9;
let division = a4 / b4;
console.log("El resultado de la division es: "+ division); 

// 3. Calcular la raíz cuadradada de los números agregados, siendo los resultados de los datos anteriores
// Este código declara un arreglo numeros con cuatro elementos. Luego, se utiliza un bucle for para iterar sobre cada elemento del arreglo. Dentro del bucle, se aplica la misma lógica que en el ejemplo anterior para calcular la raíz cuadrada de cada número y mostrar el resultado en la consola.
let numeros = [20, 41, 12, 40, 27];
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let raizCuadrada = Math.sqrt(numero);
    console.log("La raíz cuadrada de "+ numero +" es "+ raizCuadrada);
}


/* STRING */
// 1.- identificar la logintud de la cadena de texto agregada
let texto = "Buenas tardes, mi nombre es Dorian Gonzalez. Alumno de Programacion Full-Stack de EDTecnica";
let longitud = texto.length;
console.log("La longitud de la cadena es: "+ longitud + " caracteres.");

//2.- invertir la cadena de texto: Hello - olleH
//Este código declara una variable texto2 que contiene la cadena de texto que deseas invertir. Luego, se utiliza el método split() para dividir la cadena en un arreglo de caracteres, el método reverse() para invertir el orden de los elementos del arreglo y el método join() para unir los elementos del arreglo en una nueva cadena. El resultado se almacena en la variable textoInvertido y se muestra en la consola utilizando el método console.log()
let texto2 = "Hello";
let textoInvertido = texto2.split("").reverse().join("");
console.log("El texto invertido es: " + textoInvertido);

// 3.- Repetir el texto.
// Este código declara una variable texto3 que contiene la cadena de texto que deseas repetir y una variable repeticiones que indica el número de veces que deseas repetir la cadena. Luego, se utiliza el método repeat() para repetir la cadena el número de veces especificado y se almacena el resultado en la variable textoRepetido. Finalmente, se muestra el resultado en la consola utilizando el método console.log().
let texto3 = "Buenas tardes, mi nombre es Dorian Gonzalez. Alumno de Programacion Full-Stack de EDTecnica";
let repeticiones = 3;
let textoRepetido = texto3.repeat(repeticiones);
console.log("El texto repetido es: "+textoRepetido);


/* ARRAYS */
// 1.- Agregar valores al array al principio. ["Soy","Hola", "Juan"]
//Este código declara una variable arreglo que contiene un arreglo con tres elementos. Luego, se utiliza el método unshift() para agregar el valor "Buenos días" al inicio del arreglo. Finalmente, se muestra el resultado en la consola utilizando el método console.log().
let arreglo = ["Hola", "Soy", "Juan"];
arreglo.unshift("Buenas buenas, ");
console.log(arreglo);

// 2.- Revertir los valores por que tenga el array [1,2,3]
let arreglo2 = [1, 2, 3];
arreglo2.reverse();
console.log(arreglo2); 

// 3.- Sumar todos los números del array: [1,2,3] = 6
let arreglo3 = [1, 2, 3, 4];
let suma2 = 0; //Esta línea declara una variable llamada suma2 y le asigna el valor inicial de 0. Esta variable se utilizará para acumular la suma de los elementos del arreglo.
for (let i = 0; i < arreglo3.length; i++) { //Esta línea inicia un bucle for que iterará sobre cada elemento del arreglo arreglo3. La variable i se utiliza como índice para acceder a cada elemento del arreglo.
    suma2 += arreglo3[i]; //Esta línea suma el valor del elemento actual del arreglo (accedido mediante el índice i) a la variable suma2.
}
console.log("La respuesta de la suma de un arreglo es: " + suma2); // 6


/* ITERADORES */
// 1.- Muestrame los elementos del iterador
function iterador(arreglo) {
    let indice = 0;
    return {
        next: function(){
            return indice < arreglo.length ? {value: arreglo[indice++], done: false}:{done: true};
        }
    }
}
let miIterador = iterador([suma,resta,multiplicacion, division]);
console.log("Iterador: "+ miIterador.next().value); //manzana
console.log("Iterador: "+ miIterador.next().value); //naranja
console.log("Iterador: "+ miIterador.next().value); //platano
console.log("Iterador: "+ miIterador.next().value); //
console.log("Iterador: "+ miIterador.next().done); //true


//2.- Iterar un array de números y devolverme el valor * 2
// En este codigo el método se usa el evento map de los arreglos para crear un nuevo arraglo con los resultados de llamar a una función proporcionada en cada elemento del arrglo de entrada. La función proporcionada simplemente multiplica cada elemento por 2.
let numerosArreglo = [1, 2, 3, 4];
let numerosMultiplicados = multiplicarPorDos(numerosArreglo);
// Aqui se crea la funcion multiplicarPorDos  y se multiplica el arreglo5 por 2
function multiplicarPorDos(arreglo5) {
    return arreglo5.map(x => x * 2);
}
console.log(numerosMultiplicados); // [2, 4, 6, 8]

//3.- Mostrarme los índices del array que vas a iterar.
//En esta versión de la función, se utiliza el segundo parámetro de la función proporcionada al método map para obtener el índice del elemento que se está iterando. Luego, se devuelve un objeto con dos propiedades: indice, que contiene el índice del elemento, y valor, que contiene el elemento multiplicado por 2.
let numerosArreglo2 = [1, 2, 3, 4];
let numerosMultiplicados2 = multiplicarPorDos2(numerosArreglo2);
function multiplicarPorDos2(arreglo6) {
    return arreglo6.map((x, i) => ({indice: i, valor: x * 2}));
}
console.log(numerosMultiplicados2);
// [{indice: 0, valor: 2}, {indice: 1, valor: 4}, {indice: 2, valor: 6}, {indice: 3, valor: 8}]


