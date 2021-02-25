import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCredentialsInfoPage } from './register-credentials-info.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCredentialsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCredentialsInfoPageRoutingModule {}
