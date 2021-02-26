import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-register',
  templateUrl: './header-register.component.html',
  styleUrls: ['./header-register.component.scss'],
})

/**
 * This component is implemented in all register pages.
 *
 * @Input {string} _url redirect to any page
 * @Input {number} value ion-progress-bar attribute
 * @Output {void} onBack button that is going to redirect to another page
 * @Input {number} buffer ion-progress-bar attribute
 */
export class HeaderRegisterComponent implements OnInit {
  @Input() public value: number;
  @Input() public buffer: number;
  @Output() public onBack = new EventEmitter();
  @Input('url') private _url: string = '';

  constructor(private _router: Router) {}

  ngOnInit() {}

  /**
   * Button that is going to go to another page
   * @return  {void}
   */
  public navigate() : void {
    this.onBack.emit();
    this._router.navigateByUrl(this._url);
  }
}
