/* const juan = {
    name:"Juan Duran C.",
    username:"JuanDC",
    points:100,
    socilaMedia:{
        twitter: "ffdfd",
        instagram:"sdsds",
        facebook: undefined
    },
    approvedCourses:[
        "Curso de css",
        "Curso CSS GRID"
    ],
    learningPaths:[
        {
            name:"Escuela de desarrollo",
            courses:[
                "curoso de pthon",
                "curso de php",
                "javascript",
                "Curso de css",
                "Curso CSS GRID"
            ]
        },
        {
            name:"Escuela de idiomas",
            courses:[
                "ingles",
                "frances",
                "aleman"
            ]
            
        }
    ]
}


const miguel = {
    name:"Miguel Vargas R.",
    username:"MiguelVR",
    points:100,
    socilaMedia:{
        twitter: "sdsds",
        instagram:"ewewe",
        facebook: undefined
    },
    approvedCourses:[
        "Curso de css",
        "Curso CSS GRID"
    ],
    learningPaths:[
        {
            name:"Escuela de desarrollo",
            courses:[
                "curoso de pthon",
                "curso de php",
                "javascript",
                "Curso de css",
                "Curso CSS GRID"
            ]
        },
        {
            name:"Escuela marketing",
            courses:[
                "ceo",
                "analitic",
                "redes sociales"
            ]
            
        }
    ]
} */

/*
class LearningPaths {

    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaDesarrollo = new LearningPaths({
    name: "Escuela de desarrollo",
    courses: [
        "curoso de pthon",
        "curso de php",
        "javascript",
        "Curso de css",
        "Curso CSS GRID"
    ]
});

const escuelaIdiomas = new LearningPaths({
    name: "Escuela de idiomas",
    courses: [
        "ingles",
        "frances",
        "aleman"
    ]
});
const escuelaMarketing = new LearningPaths({
    name: "Escuela marketing",
    courses: [
        "ceo",
        "analitic",
        "redes sociales"
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
})*/

class Courses {
    constructor({
        name,
    }) {
        this.name = name;
    }
}

cursosProgPy = new Courses({
    name:"Programacion en Python"
});
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