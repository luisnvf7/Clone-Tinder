import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
