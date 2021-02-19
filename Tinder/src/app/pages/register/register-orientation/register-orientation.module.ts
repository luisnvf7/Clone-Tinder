import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterOrientationPageRoutingModule } from './register-orientation-routing.module';

import { RegisterOrientationPage } from './register-orientation.page';

import { ButtomRegisterComponent } from "../../../components/buttom-register/buttom-register.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOrientationPageRoutingModule
  ],
  declarations: [RegisterOrientationPage, ButtomRegisterComponent]
})
export class RegisterOrientationPageModule {}
