import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

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

  @Input() public isDisabled : boolean = true

  @Input() public title : string = "" 

  @Output() public onSendData = new EventEmitter()

  @Input('url') private _url : string = "" 

  constructor(private _router: Router) { }

  ngOnInit() {}

  /**
   * Button that is going to listen the event 
   * to redirect to another page
   * @return  {void}
   */
  public goToAnotherPage () : void {
    this.onSendData.emit()
    this._router.navigateByUrl(this._url)
  }

}
