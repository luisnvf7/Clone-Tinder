import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterGenderPageRoutingModule } from './register-gender-routing.module';

import { RegisterGenderPage } from './register-gender.page';
import { ButtomRegisterComponent } from 'src/app/components/buttom-register/buttom-register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterGenderPageRoutingModule,
  ],
  declarations: [
    RegisterGenderPage,
    HeaderRegisterComponent,
    ButtomRegisterComponent,
  ],
})
export class RegisterGenderPageModule {}
