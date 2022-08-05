//** PROTIP
class Persona {

    static porObjeto({ nombre, apellido, pais }){
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo(){
        console.log(`Inf: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais1 = 'Honduras';

const julio = {
    nombre: 'Julio',
    apellido: 'Romero',
    pais: 'México',
}
      
const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(julio);
persona1.getInfo();
persona2.getInfo();