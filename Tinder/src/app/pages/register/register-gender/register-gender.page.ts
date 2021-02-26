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
  private _genderData: ModelInterface;


  constructor(private _authService: AuthService) {}

  ngOnInit() {}

   /**
   * Button that is going to listen the event 
   * to redirect to the back page
   * @return  {void}
   */
  public onBack(): void {
    this._authService.clearAttribute('gender');
  }

  /**
   * Button that is going to listen the event 
   * to select the sex value
   * @param {boolean}
   * @return  {void}
   */
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

   /**
   * Button that is going to listen the event 
   * the checkbox button
   * @param {boolean}
   * @return  {void}
   */
  public onCheckBox(value: boolean): void {
    this.checked = value;
  }

   /**
   * Button that is going to listen the event 
   * to send the data to the service
   * @return  {void}
   */
  public sendData(): void {
    this._authService.userInformation = {
      ...this._authService.userInformation,
      gender: { ...this._genderData, isVisibleProfile: this.checked },
    };

  }
}
