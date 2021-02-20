import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
import { ButtomRegisterComponent } from 'src/app/components/buttom-register/buttom-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInformationPageRoutingModule } from './personal-information-routing.module';

import { PersonalInformationPage } from './personal-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInformationPageRoutingModule,
  ],
  declarations: [
    PersonalInformationPage,
    ButtomRegisterComponent,
    HeaderRegisterComponent,
  ],
})
export class PersonalInformationPageModule {}
