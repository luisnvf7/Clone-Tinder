import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterShowmePage } from './register-showme.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterShowmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterShowmePageRoutingModule {}
