import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterOrientationPage } from './register-orientation.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterOrientationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterOrientationPageRoutingModule {}
