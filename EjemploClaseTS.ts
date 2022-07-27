class Telefono{
    public marca:string;
    public modelo:string;
    public precio:number;

    constructor(marca:string, modelo:string, precio:number){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

}


class Moneda{
    private cedula:number;
    public nombre:string;
    public apellido:string;
    public elementos:Array<string>;
    public telefono:Telefono[]; // o Array<string>, telefono:Array<Telefono>

    constructor(identificador:number, name:string, apellido:string, elementos:Array<string>, telefono:Array<Telefono>){
        this.cedula = identificador;
        this.nombre = name;
        this.apellido = apellido;
        this.elementos = elementos;
        this.telefono = telefono;
    }

    setCedula(cedula:number):void{
        this.cedula = cedula;
    }

    getCedula():number{
        return this.cedula;
    }



}

let monedaC = new Moneda(22434272,'miguel','vargas', ["azul", "naranja", "rojo"], [{marca:"samsng", modelo:"mini s3", precio:100}, {marca:"sony", modelo:"x 10", precio:150}]);
monedaC.nombre = "david";
console.log(monedaC.nombre);

monedaC.setCedula(131221)
console.log(monedaC.getCedula());
console.log(monedaC.elementos);
console.log(monedaC.telefono);


