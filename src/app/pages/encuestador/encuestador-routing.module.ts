import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestadorPage } from './encuestador.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestadorPageRoutingModule {}
