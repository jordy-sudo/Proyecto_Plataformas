import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

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
    public alertController: AlertController,
    private navCtrl: NavController
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
    if (this.userCed.length == 10) {
      if (this.userPass.length >= 10) {
        // buscamos en la base de datos el rol y validamos usuario y contraseña
        let role = 3;
        if (this.userCed == '1718123563' && this.userPass == this.userCed && role == 3) {
          switch (role) {
            /*
            case 1:
              this.navCtrl.navigateForward('/home/administrador')
              break;
            case 2:
              this.navCtrl.navigateForward('/home/supervisor')
              break;
              */
            case 3:
              this.navCtrl.navigateForward('/home/encuestador')
              break;
          }
        }

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
