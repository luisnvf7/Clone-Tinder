import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-buttom-register',
  templateUrl: './buttom-register.component.html',
  styleUrls: ['./buttom-register.component.scss'],
})

/**
 * Button that is going to be in the register page
 * @Input 
*/

export class ButtomRegisterComponent implements OnInit {

  @Input() public isDisabled : boolean = true

  @Input() public title : string = "" 

  @Input('url') private _url : string = "" 

  constructor(private _router: Router) { }

  ngOnInit() {}

  public goToAnotherPage () : void {
    this._router.navigateByUrl(this._url)
  }

}
