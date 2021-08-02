import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';



@Component({
  selector: 'app-encuestador',
  templateUrl: './encuestador.page.html',
  styleUrls: ['./encuestador.page.scss'],
})
export class EncuestadorPage implements OnInit {


  constructor(
    private navCtrl: NavController,
    private menu: MenuController
  ) { }



  ngOnInit() {
  }

  agregar(){
    this.navCtrl.navigateForward('/home/encuestador/encuestas')

  }



}
