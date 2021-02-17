import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterWelcomePage } from './register-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterWelcomePageRoutingModule {}
