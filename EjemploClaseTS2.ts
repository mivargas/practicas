class Telefono{

    constructor(
        public marca:string,
        public modelo:string,
        public precio:number,
    )
    {}

}


class Moneda{
    

    constructor(
        private cedula:number,
        public nombre:string,
        public apellido:string,
        public elementos:Array<string>,
        public telefono:Telefono[], // o tambien Array<Telefono>
    ){}

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

