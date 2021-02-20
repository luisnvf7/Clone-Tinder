import { ButtomRegisterComponent } from './../../../components/buttom-register/buttom-register.component';
import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterWelcomePageRoutingModule } from './register-welcome-routing.module';

import { RegisterWelcomePage } from './register-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterWelcomePageRoutingModule,
  ],
  declarations: [
    RegisterWelcomePage,
    HeaderRegisterComponent,
    ButtomRegisterComponent,
  ],
})
export class RegisterWelcomePageModule {}
