import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _fb: FormBuilder, private _errorService : ErrorService) { }

  public loginForm = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
  })

  ngOnInit() {
  }
  
  public onLogin() : void {
    // this._toastService.presentToast("Supuesto Error")
    if (this.loginForm.status === "INVALID") {
      this._errorService.getErrors(this.loginForm.controls)
    } else {
      console.log("VER ", this.loginForm.get('username').value)
      console.log("PASSWORD", this.loginForm.get('password').value)
      console.log("LOGIN", this.loginForm)
      //Peticion a firebase 
  
      //Termina de hacer peticion, vaciamos valores.
      // this.loginForm.patchValue({
      //   username: '',
      //   password: ''
      // })
      
      //Ir a home
    }

  }
}
