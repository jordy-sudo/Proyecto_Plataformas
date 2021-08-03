import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular'
import { Geolocation } from '@ionic-native/geolocation/ngx';

interface Question {
  question: string;
  answ1: string;
  answ2: string;
  answ3: string;
  answ4: string;
}

interface buttonStyle {
  fill: string;
  color: string;
}

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})

export class EncuestasPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  lngCel: number;
  latCel: number;
  audio: any;
  keys: string[] = [];



  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  quentions: Question[] = [];

  btn1: buttonStyle = {
    fill: "outline",
    color: "primary"
  }

  btn2: buttonStyle = {
    fill: "outline",
    color: "secondary"
  }

  btn3: buttonStyle = {
    fill: "outline",
    color: "primary"
  }

  btn4: buttonStyle = {
    fill: "outline",
    color: "primary"
  }
  constructor(
    private geolocation: Geolocation,

  ) {
    var question1: Question = {
      question: "¿Cómo esta la situacion del País?",
      answ1: "Muy bien",
      answ2: "Bien",
      answ3: "Mal",
      answ4: "Muy mal"
    }

    var question2: Question = {
      question: "¿Cómo esta la situacion del País?",
      answ1: "Muy bien",
      answ2: "Bien",
      answ3: "Mal",
      answ4: "Muy mal"
    }

    var question3: Question = {
      question: "¿Cómo esta la situacion del País?",
      answ1: "Muy bien",
      answ2: "Bien",
      answ3: "Mal",
      answ4: "Muy mal"
    }
    var question4: Question = {
      question: "¿Cómo esta la situacion del País?",
      answ1: "Muy bien",
      answ2: "Bien",
      answ3: "Mal",
      answ4: "Muy mal"
    }

    this.quentions.push(question1)
    this.quentions.push(question2)
    this.quentions.push(question3)
    this.quentions.push(question4)
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lngCel = Number(resp.coords.longitude);
      this.latCel = Number(resp.coords.latitude);

      console.log("lng: " + this.lngCel)
    })
    this.slides.lockSwipeToNext(true);
  }

  siguienteVista() {
    this.slides.slideNext();
  }

  cambiarVista(opc: number) {
    this.slides.lockSwipeToNext(false);
    this.siguienteVista();


  }

}
