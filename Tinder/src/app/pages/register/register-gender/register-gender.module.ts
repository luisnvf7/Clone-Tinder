/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterGenderPageRoutingModule } from './register-gender-routing.module';

/* Pages */
import { RegisterGenderPage } from './register-gender.page';

/* Components */
import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
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
