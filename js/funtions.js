console.log("Prueba de conexión");

// *** TIPOS DE VARIABLES ***

// const constantes
const pi = 3.1416;
const pu = 2.54;
const name = "Wilder Andrés Duarte Neira";

// var para variables globales
var days = 15;

// let para variables de bloques O locales 
let j = 0;
let count = 1;

// FORMAS DE IMPRESIÓN

// alert
// alert(name);

// log
// console.log(name);
// console.log(days);
console.log("15");

// pantalla - body
// document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Este</h1>"
document.getElementById("box_two").innerText = "<h2>Wilder Duarte</h2>"

// *** Librerias ***

// Swal.fire({
//     icon:'error',
//     title:"Wilder Duarte",
//     text: pu.toString(),
//     footer: name,
//     showConfirmButton: false,
//     timer: 2000,
//     position: 'center-end'
// });

// *** TIPOS DE DATOS ***

// numericos
var number_one = 10;
var number_two = 2.3;

// string
var text = "Soy un texto";

// boolean
var boolean = true;
var boolean_two = false;

// arrays (arreglos) (Listas)
let array_num = [1,2,3,4,5,6];
let array_yex = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
let array_mix = [1, "2", 3, 2.5, "c"];
let array_mul = [
    {name:"A", last_name:"Duarte", age:341},
    {name:"B", last_name:"Duarte", age:331},
    {name:"C", last_name:"Duarte", age:321},
    {name:"D", last_name:"Duarte", age:351}
]

// *** OPERADORES ***

// Suma +
var suma = number_one+number_two;
console.log("La suma es "+suma);
console.log("La concatenación es "+number_one+number_two);

// Resta -
var resta = number_one-number_two;
console.log("La resta es "+resta);

// multiplicacion *
var multiplicacion = number_one*number_two;
console.log("La multiplicacion es "+multiplicacion);

// division /
var division = number_one/number_two;
console.log("La division es "+division);

// modulo %
var modulo = number_one%number_two;
console.log("Es modulo es "+modulo);

console.log(
    "La suma es "+suma+"\n"+
    "La resta es "+resta+"\n"+
    "La multiplicacion es "+multiplicacion+"\n"+
    "La division es "+division+"\n"+
    "Es modulo es "+modulo
);

var respuesta = "La suma es "+suma+"<br>"+
"La resta es "+resta+"<br>"+
"La multiplicacion es "+multiplicacion+"<br>"+
"La division es "+division.toFixed(2)+"<br>"+
"Es modulo es "+modulo.toFixed(2);

// Swal.fire({
//     showConfirmButton: false,
//     background: '#000',
//     icon: 'success',
//     title: 'Respuesta',
//     html: respuesta,
// });

// OPERADORES LÓGICOS Y ESTRUCTURAS CONDICIONALES //

// AND && CON IF
var bool = false;
var idk = 2;
if (idk=="2") { // SE LLAMA NEGACION/INVERSO
    // OJO CON EL DOBLE IGUAL Y EL TRIPLE IGUAL
    // 7=="7"   - true
    // 7==="7"  - false
    console.log("Entra a if");
}
else {
    console.log("Entra a else");
}

// OR || CON IF

var age = "31";

if (age == 32 || idk == 2) {
    console.log("Entra a if");
    age+=2;
    console.log(age)
}
else {
    console.log("Entra a else");
    age-=3;
    console.log(age+" concatena");
}

// FOR 
let array_yexdd = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]

for (let i=0; i<array_yexdd.length; i++) {
    console.log(array_yexdd[i]+" "+(i+1));
}

// WHILE 
let position = 0;
while (position<7) {
    console.log(array_yexdd[position]+" "+(position+1));
    position++;
}

// DO WHILE 
let w = 0;
do {
    console.log("Ho");
    console.log(array_yexdd[w]+" "+(w+1));
    w++;
} while (w<array_yexdd.length);

// EVENTS AND FUNCTIONS

function load_page() {
    // ejm();
    // ejem2();
    alert("Kill yourself :D");
}

function box_onblur() {
    const box_onblur_const = document.querySelector("#box_onblur");
    if (box_onblur_const.value.length<=2) {
        alert("Problemas con el texto.");
    }
    alert("Jajaja tu contraseña es "+box_onblur_const.value);
    
}

function ejm() {
    alert("Wao");
}

function ejm2() {
    alert("Wao 2");
}

const btn_changeColor = document.querySelector("#change_color");
btn_changeColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "rgb(0,0,20)"
    document.body.style.color = "#fff"
});

const form       = document.getElementById("form_register");
const nombres    = document.getElementById("nombres");
const apellidos  = document.getElementById("apellidos");
const validation = document.getElementById("validation");

form.addEventListener("submit", name_event => {
    // SUBMIT PARA FORMULARIOS
    name_event.preventDefault();
    let info = "";
    if (nombres.value.length<=2 || apellidos.value.length<=2) {
        info += "Nombres o Apellidos incorrectos";
        validation.style.color = "red";
    }
    else {
        info+= "Su nombre es "+nombres.value+" "+apellidos.value;
        validation.style.color = "green";
    }
    validation.innerText = info;
})