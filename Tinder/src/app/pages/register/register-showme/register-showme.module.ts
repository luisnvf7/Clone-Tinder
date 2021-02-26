/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterShowmePageRoutingModule } from './register-showme-routing.module';

/* Pages */
import { RegisterShowmePage } from './register-showme.page';

/* Components */
import { ButtomRegisterComponent } from "../../../components/buttom-register/buttom-register.component"
import { HeaderRegisterComponent } from './../../../components/header-register/header-register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterShowmePageRoutingModule
  ],
  declarations: [RegisterShowmePage, ButtomRegisterComponent, HeaderRegisterComponent]
})
export class RegisterShowmePageModule {}
