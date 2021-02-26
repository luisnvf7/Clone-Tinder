/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterWelcomePageRoutingModule } from './register-welcome-routing.module';
import { IonicModule } from '@ionic/angular';

/* Pages */
import { RegisterWelcomePage } from './register-welcome.page';

/* Components */
import { ButtomRegisterComponent } from './../../../components/buttom-register/buttom-register.component';
import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';
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
