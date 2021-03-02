import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private _loginSubscription : Subscription

  constructor(private _fb: FormBuilder, private _errorService : ErrorService, private _authService : AuthService,  
    private _loadingService : LoadingService  ) { }

  public loginForm = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
  })

  ngOnInit() {
  }
  
  /**
   * Event listening to the login action
   * @return  {void}
   */
  public onLogin() : void {
    this._loadingService.presentLoading()
    if (this.loginForm.status === "INVALID") {
      this._errorService.getErrorsControl(this.loginForm.controls)
    } else {
      /* Se llama al loading */
      this._authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).then((v) =>{
        this._loginSubscription = v.subscribe(valor => {
          this._loadingService.onDismissLoading()
            console.log("VALOR", valor)
          // })
          /* Se cancela el loading */
        })
      }).catch((err) => {
        console.log("INNN")
        this._loadingService.onDismissLoading()

        /* Cancela en caso de error */
      })
  
      //Termina de hacer peticion, vaciamos valores.
      // this.loginForm.patchValue({
      //   username: '',
      //   password: ''
      // })
      
      //Ir a home
    }

  }

  ngOnDestroy () {
    this._loginSubscription.unsubscribe()
  }

}
