import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-register',
  templateUrl: './header-register.component.html',
  styleUrls: ['./header-register.component.scss'],
})

/** 
 * This component is implemented in all register pages.
 * 
 * @Input {string} move redirect to any page
 * @Input {number} value ion-progress-bar attribute
 * @Input {number} buffer ion-progress-bar attribute
*/

export class HeaderRegisterComponent implements OnInit {
  @Input() public move: string;
  @Input() public value: number;
  @Input() public buffer: number;

  constructor() {}

  ngOnInit() {}
}
