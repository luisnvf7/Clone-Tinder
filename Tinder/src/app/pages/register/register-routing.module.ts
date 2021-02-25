import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'register-welcome',
    loadChildren: () => import('./register-welcome/register-welcome.module').then( m => m.RegisterWelcomePageModule)
  },
  {
    path: 'register-gender',
    loadChildren: () => import('./register-gender/register-gender.module').then( m => m.RegisterGenderPageModule)
  },
  {
    path: 'register-orientation',
    loadChildren: () => import('./register-orientation/register-orientation.module').then( m => m.RegisterOrientationPageModule)
  },
  {
    path: 'register-showme',
    loadChildren: () => import('./register-showme/register-showme.module').then( m => m.RegisterShowmePageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },  {
    path: 'register-credentials-info',
    loadChildren: () => import('./register-credentials-info/register-credentials-info.module').then( m => m.RegisterCredentialsInfoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
