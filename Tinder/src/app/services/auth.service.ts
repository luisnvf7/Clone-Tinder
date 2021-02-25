import { Injectable } from '@angular/core';

import {UserInfoInterface} from "../models/userInfoInterface"

import { AngularFireAuth } from "@angular/fire/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userInformation : UserInfoInterface

  constructor(private _auth : AngularFireAuth) {}

  public get userInformation () {
    return this._userInformation
  }

  public set userInformation (userInformation : UserInfoInterface) {
    this._userInformation = userInformation

  }

  public clearAttribute () : void {
    
  }

  public login () : void {

  }

  public register () : void {
    
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