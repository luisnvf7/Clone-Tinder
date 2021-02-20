import { Component, OnInit, Input } from '@angular/core';
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
 * @Input {number} buffer ion-progress-bar attribute
 */
export class HeaderRegisterComponent implements OnInit {
  @Input('url') private _url: string = '';
  @Input() public value: number;
  @Input() public buffer: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigateByUrl(this._url);
  }
}
