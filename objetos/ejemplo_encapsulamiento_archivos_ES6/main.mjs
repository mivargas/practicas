//extension es mjs porque es un modulo
function videoPlay(id){
    const urlSecreta = "www.losSecretos.com/"+id;
    console.log("Estamos reproducioendo: "+urlSecreta);
}

function videoStop(id){
    const urlSecreta = "www.losSecretos.com/"+id;
    console.log("Estamos pausando: "+urlSecreta);
}

export class PlataformaClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name; 
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }

    
}