import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userCed: string = "";
  userPass: string = "";
  tipoIconoPass: string = "eye-outline";
  tipotextPass: string = "password";

  constructor(
    public alertController: AlertController
  ) { }


  showIconPass() {
    console.log("Aplasto el boton")
    if (this.tipotextPass == "password") {
      this.tipotextPass = "text"
      this.tipoIconoPass = "eye-off-outline"
    } else {
      this.tipotextPass = "password"
      this.tipoIconoPass = "eye-outline"
    }

  }

  validar() {
    console.log(this.userCed.length)
    if (this.userCed.length == 10) {
      if (this.userPass.length >= 10) {


        console.log(this.userPass)
      } else {
        this.mensajesAlert("Campo contraseña", "Ingrese de manera correcta su contraseña");
      }
    } else {
      this.mensajesAlert("Campo cedula", "Ingrese los 10 dígitos de su cédula");
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
