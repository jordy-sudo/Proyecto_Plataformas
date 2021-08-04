import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  Nombre:string ;
  Apellido:string;
  Cedula:number;
  Celular:number;
  tipotextPass: string ;
  tipotextNumber:number; 
  contra:number;
  image:any;
  constructor(  public alertController: AlertController,public camera:Camera) { }
  
  ngOnInit() {
  }

  SacarCam(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth:1024,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }).then(resultado=>{
      this.image = "data:image/jpeg;base64,"+resultado;
    }).catch(err=>{
      console.log(err);
    })
  }
  Galeria(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth:1024,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }).then(resultado=>{
      this.image = "data:image/jpeg;base64,"+resultado;
    }).catch(err=>{
      console.log(err);
    })
  }
  registrar(event){
    //console.log(this.Nombre,this.Cedula,this.Apellido,this.Celular,this.contra);
    console.log(event.detail.value);
   if (this.Cedula==this.contra && this.Nombre != undefined && this.Nombre != undefined) {
      this.mensajesAlert("Registro exitoso",'Ya puedes usar tu nuevo usuario');
    }else{
      this.mensajesAlert("La contraseña debe ser igual a la cedula Y los campos no deben estar vacios",'Intentalo de nuevo');
    }
  }
  async mensajesAlert(texto1: string, texto2: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class --background',
      header: `${texto1}`,
      message: `<b>${texto2}</b>`,
      buttons: ['OK']
    });
    await alert.present();
  }
}