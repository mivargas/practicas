class Comment{
    constructor({
        content,
        studentName,
        studentRol = "estudiantes",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRol = studentRol;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + "(" +this.studentRol+ ")" );
        console.log(this.likes + " likes");
        console.log(this.content);
    }

}

class Courses {
    constructor({
        name,
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name; // en Javascript no existe la encapsulacion, mas se puede hacer un tipo de emulacion para decirle al equilo que el atributo seraprivado por medio de una sintaxis clave, en este caso el "_"
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() { //se usa la palabra reservada ger en vez de un metodo tradicional a traves de nombres como getName. NOTA: en Set aplica lo mismo
        return this._name;
    }

    set name(nuevoCurso) {
        if (nuevoCurso === "Mal curso")
            console.log("Error... web")
        else {
            this._name = nuevoCurso;
        }
    }
}

cursosProgPy = new Courses({
    name: "Programacion en Python",
    isFree: true
});

cursosProgPy.name; // como uso la palabrra reservada set no tengo necesidad de llamarlo con () como si fuera un metodo ordinario.Ejemp: cursosProgPy.getName(){}

cursosProgPy.name = "Programacion en Python y flask" //Como uso la palabrra reservada get no tengo necesidad pasarle entre () un parmetro como si fuera un metodo ordinario.Ejemp: cursosProgPy.setName(nuevocurso){}

cursosProgPhp = new Courses({
    name: "rogramacion en PHP"
});
cursosProgJS = new Courses({
    name: "Programacion en Javascript"
});
//******************************** */
cursosIdimIngles = new Courses({
    name: "Ingles",
    lang: "english"
});
cursosIdiomFrances = new Courses({
    name: "Frances"
});
//******************************** */
cursosMarkCeo = new Courses({
    name: "Ceo"
});
cursosMarkAnalit = new Courses({
    name: "Analitic"
});


class LearningPaths {

    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaDesarrollo = new LearningPaths({
    name: "Escuela de desarrollo",
    courses: [
        cursosProgJS,
        cursosProgPhp,
        cursosProgJS
    ]
});

const escuelaIdiomas = new LearningPaths({
    name: "Escuela de idiomas",
    courses: [
        cursosIdimIngles,
        cursosIdiomFrances
    ]
});
const escuelaMarketing = new LearningPaths({
    name: "Escuela marketing",
    courses: [
        cursosMarkCeo,
        cursosMarkAnalit
    ]
});


class Student {

    constructor({
        name,
        email,
        username,
        twitter = undefined, //opcioal
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name,
            this.email = email,
            this.username = username,
            this.SocialMedia = {
                twitter, //es lo mismo que decir twitter:twitter
                instagram,
                facebook
            },
            this.approvedCourses = approvedCourses,
            this.learningPaths = learningPaths
    }

    publicarComentario(commentContent){
        const comentario = new Comment({ //intanciando clase  dntro del metodo de otra clase
            content:commentContent,
            studentName:this.name //ya el nombre esta en la clase
        });
        
        comentario.publicar();
    }
}


class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) { //el argumento que se enviara para el parametro no es un string sino un objeto y este es Curses
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + " solo puedes tomar cursos gratis"); // el name es un obtenido por el get() metodo reservado
        }
    }

}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + " solo puedes tomar cursos en español");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) { //el argumento que se enviara para el parametro no es un string sino un objeto y este es Curses

        this.approvedCourses.push(newCourse);

    }
}

class TeacherStudent extends Student{
    publicarComentario(commentContent){
        const comentario = new Comment({ 
            content:commentContent,
            studentName:this.name,
            studentRol: "Profesor" //sobreescriiendo propiedades (polimorfismo)
        });
        
        comentario.publicar();
    }
}




const juan2 = new FreeStudent({
    name: "juan",
    username: "juanDC",
    email: "jua@dc.com",
    twitter: "midds",
    learningPaths: [
        escuelaDesarrollo, //igual que decir escuelaDesarrollo:escuelaDesarrollo
        escuelaIdiomas
    ]
})


const Miguel2 = new BasicStudent({
    name: "miguel",
    username: "miVR",
    email: "migue@vr.com",
    instagram: "midds",
    learningPaths: [
        escuelaDesarrollo,
        escuelaMarketing
    ]
})


const gabriel = new TeacherStudent({
    name: "gabriel",
    username: "gaboDC",
    email: "gaaa@dc.com",
    twitter: "jdjjdddj",

})