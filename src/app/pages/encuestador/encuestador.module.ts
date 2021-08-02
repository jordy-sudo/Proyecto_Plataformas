import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestadorPageRoutingModule } from './encuestador-routing.module';

import { EncuestadorPage } from './encuestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestadorPageRoutingModule
  ],
  declarations: [EncuestadorPage]
})
export class EncuestadorPageModule {}
