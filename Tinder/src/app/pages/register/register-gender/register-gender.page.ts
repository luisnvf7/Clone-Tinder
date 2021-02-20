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

  public genderValues: ModelInterface[] = [
    {
      id: 1,
      name: 'mujeres',
      isSelected: false,
    },
    {
      id: 2,
      name: 'hombres',
      isSelected: false,
    },
  ];

  constructor() {}

  ngOnInit() {}

  public selectSex(index): void {
    this.genderValues = this.genderValues.map((g) => {
      return {
        ...g,
        isSelected: false,
      };
    });

    this.genderValues[index].isSelected = true;
    this.disableButton = false;
  }

  public onCheckBox(): void {}
}
