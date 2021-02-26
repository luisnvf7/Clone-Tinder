/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterCredentialsInfoPageRoutingModule } from './register-credentials-info-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

/* Pages */
import { RegisterCredentialsInfoPage } from './register-credentials-info.page';

/* Components */
import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
import { ButtomRegisterComponent } from 'src/app/components/buttom-register/buttom-register.component';

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
