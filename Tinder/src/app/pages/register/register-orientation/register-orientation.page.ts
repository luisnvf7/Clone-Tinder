import { Component, OnInit } from '@angular/core';
import { SexualOrientationInterface } from 'src/app/models/sexualOrientationInterface';
import { AuthService } from 'src/app/services/auth.service';

import  { ModelInterface  } from "../../../models/modelInterface"

@Component({
  selector: 'app-register-orientation',
  templateUrl: './register-orientation.page.html',
  styleUrls: ['./register-orientation.page.scss'],
})
export class RegisterOrientationPage implements OnInit {

  public disableButton : boolean = true

  public orientations : ModelInterface[] = [
    { 
      id: 1, 
      name: "Heterosexual",
      isSelected: false
    },
    { 
      id: 2, 
      name: "Gay",
      isSelected: false
    },
    { 
      id: 3, 
      name: "Lesbiana",
      isSelected: false
    },
    { 
      id: 4, 
      name: "Bisexual",
      isSelected: false
    },
    { 
      id: 5, 
      name: "Asexual",
      isSelected: false
    },
    { 
      id: 6, 
      name: "Demisexual",
      isSelected: false
    },
    { 
      id: 7, 
      name: "Pansexual",
      isSelected: false
    },
    { 
      id: 8, 
      name: "Queer",
      isSelected: false
    }
  ]

  private _showOrientation : boolean = false


  private _sexualOrientation : SexualOrientationInterface

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  public onBack(): void {
    this._authService.clearAttribute('sexualOrientation');
  }

  public onSelectOrientation (index: number, selectValue: boolean) : void {    
    if (!selectValue) {
      this.orientations[index].isSelected = selectValue
    }
    if (this.orientations.filter(v => v.isSelected ).length < 3 && selectValue) {
      this.orientations[index].isSelected = selectValue
    }
    if(this.orientations.filter(v => v.isSelected ).length >=1 ) {
      this.disableButton = false
    } if (this.orientations.filter(v => v.isSelected ).length === 0) {
      this.disableButton = true
    }
  }

  public checked (value : boolean) : void {
    this._showOrientation = value
  }

  public sendData () : void {
    this._sexualOrientation = {
      orientations: this.orientations.filter(v => v.isSelected).map(v => {
        delete v.isSelected
        return {
          ...v
        }
      }),
      isVisibleProfile : this._showOrientation
    }
    this._authService.userInformation = {
      ...this._authService.userInformation,
      sexualOrientation : this._sexualOrientation
    }
  }


}
