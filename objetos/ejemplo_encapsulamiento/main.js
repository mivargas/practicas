class Courses {
    constructor({
        name,
    }) {
        this._name = name; // en Javascript no existe la encapsulacion, mas se puede hacer un tipo de emulacion para decirle al equilo que el atributo seraprivado por medio de una sintaxis clave, en este caso el "_"
    }

    get name(){ //se usa la palabra reservada ger en vez de un metodo tradicional a traves de nombres como getName. NOTA: en Set aplica lo mismo
        return this._name;
    }

    set name(nuevoCurso){
        if(nuevoCurso === "Mal curso")
        console.log("Error... web")
        else{
            this._name = nuevoCurso;
        }
    }
}

cursosProgPy = new Courses({
    name:"Programacion en Python"
});

cursosProgPy.name; // como uso la palabrra reservada set no tengo necesidad de llamarlo con () como si fuera un metodo ordinario.Ejemp: cursosProgPy.getName(){}

cursosProgPy.name = "Programacion en Python y flask" //Como uso la palabrra reservada get no tengo necesidad pasarle entre () un parmetro como si fuera un metodo ordinario.Ejemp: cursosProgPy.setName(nuevocurso){}

cursosProgPhp = new Courses({
    name:"rogramacion en PHP"
});
cursosProgJS= new Courses({
    name:"Programacion en Javascript"
});
//******************************** */
cursosIdimIngles = new Courses({
    name:"Ingles"
});
cursosIdiomFrances = new Courses({
    name:"Frances"
});
//******************************** */
cursosMarkCeo = new Courses({
    name:"Ceo"
});
cursosMarkAnalit = new Courses({
    name:"Analitic"
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
}


const juan2 = new Student({
    name: "juan",
    username: "juanDC",
    email: "jua@dc.com",
    twitter: "midds",
    learningPaths: [
        escuelaDesarrollo, //igual que decir escuelaDesarrollo:escuelaDesarrollo
        escuelaIdiomas
    ]
})


const Miguel2 = new Student({
    name: "miguel",
    username: "miVR",
    email: "migue@vr.com",
    instagram: "midds",
    learningPaths: [
        escuelaDesarrollo,
        escuelaMarketing
    ]
})