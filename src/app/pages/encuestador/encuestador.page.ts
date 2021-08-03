import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-encuestador',
  templateUrl: './encuestador.page.html',
  styleUrls: ['./encuestador.page.scss'],
})
export class EncuestadorPage implements OnInit {

  public nombreEncuestador: string = ""
  public nombreSupervisor: string = ""
  public numEncuestasRealizadas: number;
  public numEncuestasfaltantes: number;
  public fecha = new Date();
  public hoy: string;

  constructor(
    private navCtrl: NavController,
  ) { }



  ngOnInit() {
    this.nombreSupervisor = "Pedro Supervisor"
    this.nombreEncuestador = "Daniela encuestadora"
    this.numEncuestasRealizadas = 10;
    this.numEncuestasfaltantes = 80;
    this.hoy = this.fecha.toLocaleDateString();
  }

  agregar() {
    this.navCtrl.navigateForward('/home/encuestador/encuestas')

  }



}
