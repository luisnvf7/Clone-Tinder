import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buttom-register',
  templateUrl: './buttom-register.component.html',
  styleUrls: ['./buttom-register.component.scss'],
})

/**
 * This component represent a special button in al register pages.
 * 
 * @Input {boolean} isDisabled check if button is disabled
 * @Input {string} title content of the button
 * @Input {string} _url url to redirect to another page
 * @Output {void} onSendData event to go to another page using it's parent
*/



export class ButtomRegisterComponent implements OnInit {

  private _formIsValid : boolean = false

  @Input() public isDisabled : boolean = true

  @Input() public title : string = "" 

  @Output() public onSendData = new EventEmitter()

  @Input('url') private _url : string = "" 

  constructor(private _router: Router, private _authService: AuthService) { 

    this._authService.getValue().subscribe(v => {
      this._formIsValid = v
    })

  }

  ngOnInit() {
    // this.onGetValue().subscribe(v => {
    //   console.log("VALOR", v)
    // })
  }

  /**
   * Button that is going to listen the event 
   * to redirect to another page
   * @return  {void}
   */
  public goToAnotherPage () : void {
    this.onSendData.emit()
    if (this._formIsValid) {
      this._router.navigateByUrl(this._url)
    }
  }

}
