import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})

export class EncuestasPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  lngCel: number;
  latCel: number;
  preguntas: Observable<any>;
  invisible: boolean = false
  respuestas = []
  boton: boolean = false;
  timeA: any;
  timeB: any;


  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(
    private dataService: DataService,
    private geolocation: Geolocation,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.timeA = moment();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lngCel = Number(resp.coords.longitude);
      this.latCel = Number(resp.coords.latitude);

      this.respuestas.push(JSON.parse(this.route.snapshot.paramMap.get('cedulas')))
      this.respuestas.push(moment().format('L'))
      this.respuestas.push({ lat: this.latCel, lng: this.lngCel })

    })

    this.preguntas = this.dataService.getPreguntas();
    this.slides.lockSwipeToNext(true);
  }


  GuardarRespuestas(i: number, pregunta: string, opcion: string) {
    if (pregunta != undefined) {
      this.invisible = true;
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToPrev(true);
      this.slides.lockSwipeToNext(true);
      this.invisible = false;
      this.respuestas.push(
        [{
          pregunta: pregunta,
          respuesta: opcion
        }])

      if (i == 10) {
        this.boton = true
        this.invisible = true;
        this.timeB = moment();
      }
    }

  }

  almacenar() {


    var duration = this.timeB.diff(this.timeA, 'seconds')
    this.respuestas.push({duracion: duration})
    console.log(this.respuestas)
    this.navCtrl.navigateForward('home/encuestador')
  }
}
