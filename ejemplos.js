/******************************HOISTING**************************************/
/* JavaScript solo utiliza el hoisting en declaraciones, mas no en inicializaciones */

nameOfDog("Elmo");

function nameOfDog(name) { console.log(name); };

//ejemplo 2
add();
function add() {
    let myNumber = 4;
    console.log(myNumber + myNumber);
}

/******************************CLOUSER (CLAUSULAS)**************************************/
/* Es lacapacidad que tiene una funcion de recordar un valor mediante otra funcion interna */
const buildCount = (i) => {
    let count = i; //toda clasula requiere una variable externa que infiera dentro de la funcion interna

    const displayCount = () => { //tambien puede escribirse como: return functiom displayCount(){
        console.log(count++);
    };
    return displayCount;
}


const con = buildCount(2);

con();
con();
con();
con();

const con2 = buildCount(100);
con2();

//ejemplo 2:
const crearContador = () => {
    let contador = 1;

    return { //esta devolviendo un objeto clave valor, donde el valor de las claves son funciones
        incrementar: () => {
            contador++;
            return contador;
        },
        decrementar: () => {
            contador--
            return contador;
        },
        obtenerValor: () => {
            return contador
        }
    }
}

const contador1 = crearContador();
console.log(contador1.incrementar());
console.log(contador1.incrementar());
console.log(contador1.obtenerValor());
console.log(contador1.decrementar());


//ejemplo 3
const colorFuente ='color:white;';

const MostrarMensaje = (tipo, estilos) => {
    const mensaje = (descripcion) => {
        console.log(`%c ${tipo}: ${descripcion}`, estilos + colorFuente);
    }
    return mensaje;
}

let error = MostrarMensaje('Error', 'background: red;');
error('Error en la operacion ');

let warning = MostrarMensaje('Warning','background: orange;');
warning('Advertencia, información los datos no poseen seguridad ');

let success = MostrarMensaje('Success','background: green;');
success('La petición se ha enviado ');

let info = MostrarMensaje('Info','background: blue;');
info('Este modulo es solo de información ');



/********************************METODOS DENTRO DE OBJETOS**************************************/
var miAuto = {
    marca: "Toyota",    
    modelo: "Corolla",
    anio: 2020,
    detalleAuto: function() {
        console.log(`el auto ${this.marca} ${this.modelo} es del año ${this.anio}`);
    }
}
miAuto.detalleAuto();

/********************************OBJETO CON FUNCION CONSTRUCTORA**************************************/
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

autoNuevo = new auto("Toyota", "Corolla", 2021);
console.log(autoNuevo);

autoNuevo2 = new auto("Fiat", "Power", 2019);
console.log(autoNuevo2);

/********************************FUNCION PARA ARRAYS y OBEJETOS**************************************/

//map (transforma elementeos de un array generando uno nuevo a partir del original) NOTA: todo debe ser sincrono
//1
const numeros = [2, 5, 7, 10];

const dobles = numeros.map(numero => numero * 2);
console.log(numeros);
console.log(dobles);

//2
const productos = [
    {id:"drftgbhnm4n4jn4j5nj45n4", nombre:"camisa", precio:800},
    {id:"34ktgbhnm4n4jn4j5nj4kg6", nombre:"pantalon", precio:1300},
    {id:"ek6ngbhnm4n4jn4j5nmdj45", nombre:"zaptos", precio:1700}
];

const productosDescueto = productos.map(producto => {
    if(producto.precio < 1000){
        return producto;
    }

    return {
        ...producto,
        precio: producto.precio * 0.9
    }
});

console.log(productos);
console.log(productosDescueto);



//filter (filtra elementeos de un array generando uno nuevo a partir del original)
//1
const productosBaratos = productos.filter(producto => producto.precio < 1000);
console.log(productosBaratos);

//optimizado;
const esBarato = producto => producto.precio < 1000; //colocamos el predicdo en una variable
const esCaro = producto => !esBarato(producto);

const productosBaratos = productos.filter(esBarato);
console.log(productosBaratos);

const productosCaros = productos.filter(esCaro);
console.log(productosCaros);

//2
const numeros = [1,2,3,4,3,1];

const numerosUnicos = numeros.filter((numero, indice, numeros)=>{
    return indice === numeros.indexOf(numero);
});

console.log(numeros);
console.log(numerosUnicos);

//reduce (acumula los elementeos de un array generando uno nuevo dando como resultado final la acumulacion)

//1
const arreglo = [2,5,9,12];

arregloReducido = arreglo.reduce((valorInicial, valorActual, indice) => {
    return valorInicial + valorActual;
}, 0); //0 es lo que corresponde a valorInicial y es el primer valor a tomar en cuenta en la acumulacion
console.log(arregloReducido);

//simplificado
arregloReducido = arreglo.reduce((valorInicial, valorActual) =>  valorInicial + valorActual, 0);
console.log(arregloReducido);

//optimizado
const acumular = (valorInicial, valorActual) =>  valorInicial + valorActual;  //creamos variable con el predicado
arregloReducido = arreglo.reduce(acumular, 0);
console.log(arregloReducido);


//2
const arreglo = [2,5,9,12];
const acumularDobles = (acumulador, numero) => {
    return [...acumulador, numero *2];
}

const dobles = arreglo.reduce(acumularDobles, []);
console.log(dobles);

///////////////////ejemplo de Convinacion/////////////
const products = [
    {id:"sdfsfsd", nombre:"camisa", precio:800},
    {id:"gfghfgh", nombre:"pantalon", precio:1300},
    {id:"lpalals", nombre:"zaptos", precio:1700}
];

const esBarato = producto => producto.precio < 1000; 
const esCaro = producto => !esBarato(producto);
const obtenerPrecio = producto => producto.precio;
const acumular = (valorInicial, valorActual) =>  valorInicial + valorActual;

PrecioTotalProductosCaros = products.filter(esCaro).map(obtenerPrecio).reduce(acumular, 0);
console.log(PrecioTotalProductosCaros);


//find (Devuelve el objeto encontrado en la busqueda)
const prenda = "pantalon";
const EncontrarObjeto =  articulo => articulo.nombre === prenda;

const detalleArticulo = products.find(EncontrarObjeto);
console.log(detalleArticulo);