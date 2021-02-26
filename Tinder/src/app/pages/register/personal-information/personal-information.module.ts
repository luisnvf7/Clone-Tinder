/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonalInformationPageRoutingModule } from './personal-information-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

/* Pages */
import { PersonalInformationPage } from './personal-information.page';

/* Components */
import { ButtomRegisterComponent } from 'src/app/components/buttom-register/buttom-register.component';
import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInformationPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PersonalInformationPage,
    ButtomRegisterComponent,
    HeaderRegisterComponent,
  ],
})
export class PersonalInformationPageModule {}
