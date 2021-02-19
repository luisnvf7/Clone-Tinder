import { Component, OnInit } from '@angular/core';

import  { SexualOrientation  } from "../../../models/orientationModel"

@Component({
  selector: 'app-register-orientation',
  templateUrl: './register-orientation.page.html',
  styleUrls: ['./register-orientation.page.scss'],
})
export class RegisterOrientationPage implements OnInit {

  public disableButton : boolean = true

  public orientations : SexualOrientation[] = [
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

  constructor() { }

  ngOnInit() {
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
    console.log("VALUE", value)
  }

}
