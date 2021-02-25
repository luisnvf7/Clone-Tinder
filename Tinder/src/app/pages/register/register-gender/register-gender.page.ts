import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModelInterface } from '../../../models/modelInterface';

@Component({
  selector: 'app-register-gender',
  templateUrl: './register-gender.page.html',
  styleUrls: ['./register-gender.page.scss'],
})
export class RegisterGenderPage implements OnInit {
  public checked: boolean = false;
  public disableButton: boolean = true;
  private _genderData: ModelInterface;

  public genderValues: ModelInterface[] = [
    {
      id: 1,
      name: 'mujer',
      isSelected: false,
    },
    {
      id: 2,
      name: 'hombre',
      isSelected: false,
    },
  ];

  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  public onBack(): void {
    this._authService.clearAttribute('gender');
  }

  public selectSex(index: number): void {
    this.genderValues = this.genderValues.map((g) => {
      return {
        ...g,
        isSelected: false,
      };
    });

    this.genderValues[index].isSelected = true;
    this.disableButton = false;

    this._genderData = {
      id: this.genderValues[index].id,
      name: this.genderValues[index].name,
    };
  }

  public onCheckBox(value: boolean): void {
    this.checked = value;
    console.log(value);
  }

  public sendData(): void {

    this._authService.userInformation = {
      ...this._authService.userInformation,
      gender: { ...this._genderData, isVisibleProfile: this.checked },
    };

  }
}
