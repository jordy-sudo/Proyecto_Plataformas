import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-encuestador',
  templateUrl: './encuestador.page.html',
  styleUrls: ['./encuestador.page.scss'],
})
export class EncuestadorPage implements OnInit {

  public nombreEncuestador: string = ""
  public nombreSupervisor: string = ""
  public cedulaEncuestador: string = "1718123563"
  public cedulaSupervisor: string = "1718123321"
  public numEncuestasRealizadas: number;
  public numEncuestasfaltantes: number;
  public hoy: string;
  cedulas = {
    encCed: this.cedulaEncuestador,
    encSup: this.cedulaSupervisor,
  };

  constructor(
    private navCtrl: NavController,
  ) { }



  ngOnInit() {
    this.nombreSupervisor = "Pedro Supervisor"
    this.nombreEncuestador = "Daniela encuestadora"
    this.numEncuestasRealizadas = 10;
    this.numEncuestasfaltantes = 80;
    this.hoy = moment().locale("es").format("LL");

    console.log(this.hoy);


  }

  agregar() {
    this.navCtrl.navigateForward(`/home/encuestador/encuestas/${JSON.stringify(this.cedulas)}`)

  }



}
