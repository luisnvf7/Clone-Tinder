import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import  { ModelInterface } from "../../../models/modelInterface"
@Component({
  selector: 'app-register-showme',
  templateUrl: './register-showme.page.html',
  styleUrls: ['./register-showme.page.scss'],
})
export class RegisterShowmePage implements OnInit {

  public disableButton : boolean = true
  public genderValues : ModelInterface[] = [{
    id: 1,
    name: "mujeres",
    isSelected: false
  },
  {
    id: 2,
    name: "hombres",
    isSelected: false
  }, 
  {
    id: 3,
    name: "todos",
    isSelected: false
  }
  ] 
  private _genderToShow : ModelInterface

  constructor(private _authService : AuthService) { }

  ngOnInit() {}

  public onBack(): void {
    this._authService.clearAttribute('genderToShow');
  }

  public buttonSelected (index : number) : void {
    this.genderValues = this.genderValues.map(v => {
      return {
        ...v,
        isSelected: false
      }
    })
    this.genderValues[index].isSelected = true
    this.disableButton = false
  }

  sendData () : void {
    this._genderToShow = this.genderValues.find(v => {
      return v.isSelected
    })

    delete this._genderToShow.isSelected

    this._authService.userInformation = {
      genderToShow: this._genderToShow,
      ...this._authService.userInformation 
    }
  }
}
