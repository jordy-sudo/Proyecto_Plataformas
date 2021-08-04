import { Injectable } from "@angular/core";
//var registro_lista=[]

var registro_lista=JSON.parse(localStorage['registro'] || '[]' ) ;//

@Injectable()
export class servicioRegistro{
    constructor(){

    }
    AgregarRegistro(nombre,pass,cedula){
        
        var newRegistro={
           nombre:nombre,
            pass:pass,
            cedula:cedula
        };
        //console.log(newRegistro);
        registro_lista.push(newRegistro)
        this.guardarDatos(newRegistro)
        this.persistencia();

    }
    persistencia(){
       localStorage['registro']= JSON.stringify(registro_lista);
        //console.log(saber)
       // return saber;
    }
    mostrarVector(){
        return registro_lista;
    }
    obtenerStorage(){
        let ubicacion = JSON.parse(localStorage.getItem('registro'))
        //console.log(ubicacion)
        return ubicacion
    }
    guardarDatos(registro){
        localStorage.setItem('Usuario',JSON.stringify(registro));
    }
    borrarRegistro(poss){
        registro_lista.splice(poss,1)
        this.persistencia();
        //console.log('borrar')
    }
    
}
