import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public buttonnSelected (index : number) : void {
    this.genderValues = this.genderValues.map(v => {
      return {
        ...v,
        isSelected: false
      }
    })
    this.genderValues[index].isSelected = true
    this.disableButton = false
  }
}
