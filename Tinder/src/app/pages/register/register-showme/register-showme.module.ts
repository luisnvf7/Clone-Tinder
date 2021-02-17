import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterShowmePageRoutingModule } from './register-showme-routing.module';

import { RegisterShowmePage } from './register-showme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterShowmePageRoutingModule
  ],
  declarations: [RegisterShowmePage]
})
export class RegisterShowmePageModule {}
