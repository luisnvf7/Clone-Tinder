import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
import { ButtomRegisterComponent } from 'src/app/components/buttom-register/buttom-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCredentialsInfoPageRoutingModule } from './register-credentials-info-routing.module';

import { RegisterCredentialsInfoPage } from './register-credentials-info.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCredentialsInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterCredentialsInfoPage,
    HeaderRegisterComponent,
    ButtomRegisterComponent,
  ],
})
export class RegisterCredentialsInfoPageModule {}
