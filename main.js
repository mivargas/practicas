const natalia = { //objeto literal
    name: "Natalai",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso practico de html y css"
    ],
    aprobarCurso(nuevoCurso) {                   //tambien aprobarCurso: function(){}
        this.cursosAprobados.push(nuevoCurso);
    }
};

//Hacer que natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de responsive design")

//cambiar nombre
natalia.name = "NATALIA GOMEZ"

//usar metodo dentro
natalia.aprobarCurso("CSS GRID")





//prototipo 
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (cursoAprobado) { // no usar arrow functions  (nota esto es un metodo de un prototipo [[prototype]] o __proto__)
    this.cursosAprobados.push(cursoAprobado);
}

const juanita = new Student("Juana Torres", 22, ["Diseño grafico", "ingles"]);
juanita.aprobarCurso("Programacion");



//prototipos con la sintaxis de clases (realmente javascript es un lenguaje poo basado en prototipos pero se puede hacer uso de una sintaxis de clase para ser mas amigable aunque realmente por dentro son prototipos)
class Estudiante {

    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado)
    }
}

const miguel = new Estudiante("Miguel Vargas", 29, ["python", "php"]);
miguel.aprobarCurso("javascript");


//prototipos con la sintaxis de clases con un solo parametro (objeto) recibe un objeto retorina un objeto
class  Estudiante2{
    constructor({ //al hacerlo por un solo parametro del tipo objeto puedo usar parametros opcionales y no importa el orden a seguir en la intacia
        cursosAprobados=[],
        email,
        age,
        name, 
        telefono
    }){
        this.email = email;
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.telefono = telefono;
    }

    aprobarCurso(cursoAprobado){
        this.cursosAprobados.push(cursoAprobado)
    }
}

const david = new Estudiante2({
    age:29,
    email: "miguelvargas619@gmail.com",
    name:"MIGUEL VARGAS",
});
david.aprobarCurso("ORACLE");