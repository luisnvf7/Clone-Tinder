import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-register-credentials-info',
  templateUrl: './register-credentials-info.page.html',
  styleUrls: ['./register-credentials-info.page.scss'],
})
export class RegisterCredentialsInfoPage implements OnInit {
  credentialsForm = this._fb.group({
    username: ['',[Validators.required, Validators.maxLength(12), Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _errorService: ErrorService
  ) {}

  ngOnInit() {}

  /**
   * Button that is going to listen the event 
   * to redirect to the back page
   * @return  {void}
   */
  public onBack(): void {
    this._authService.clearAttribute('credentialsInfo');
    this.credentialsForm.patchValue({
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  /** 
   * Check if the form has some errors
   * and set the values to the userInformation
   * variable
   * @return  {void}
   */
  public onCredential(): void {
    if(this.credentialsForm.get('password').value !== this.credentialsForm.get('confirmPassword').value){
      this._errorService.getGenericErrors('Las Contraseñas deben ser iguales');
    }else {
      if (this.credentialsForm.status === 'INVALID') {
        this._errorService.getErrorsControl(this.credentialsForm.controls);
      } else {
        this._authService.userInformation = {
          ...this._authService.userInformation,
          credentialsInfo: {
            username: this.credentialsForm.get('username').value,
            password: this.credentialsForm.get('password').value,
          },
        };
        this._authService.register();
      }
    }
  }
}
