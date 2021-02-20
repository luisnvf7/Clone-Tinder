import { Injectable } from '@angular/core';

import {UserInfoInterface} from "../models/userInfoInterface"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userInformation : UserInfoInterface

  constructor() {}

  public get userInformation () {
    return this._userInformation
  }

  public set userInformation (userInformation : UserInfoInterface) {
    this._userInformation = userInformation
  }

  public clearAttribute () : void {
    
  }

}

/* 
  {
    gender: {
      id: 1,
      name: "Hombre",
      isVisibleProfile: true
    },
    sexualOrientation: {
      orientations: [
      {
        id: 1,
        name: "Heterosexual"
      }
    ],
      isVisibleProfile: true
    },
    genderToShow: {
      id: 1,
      name:"Hombres"
    } ,
    personalInformation:{
      name: "Pablo",
      age: 21
    }
  }
*/