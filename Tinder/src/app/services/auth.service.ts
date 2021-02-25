import { Injectable } from '@angular/core';

import { UserInfoInterface } from '../models/userInfoInterface';

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userInformation: UserInfoInterface;
  private _usersCollection: AngularFirestoreCollection;

  constructor(
    private _auth: AngularFireAuth,
    private _store: AngularFirestore
  ) {
    this._usersCollection = this._store.collection('Users');
  }

  public get userInformation() {
    return this._userInformation;
  }

  public set userInformation(userInformation: UserInfoInterface) {
    this._userInformation = userInformation;
  }

  public clearAttribute(value): void {
    delete this._userInformation[value];
  }

  public login(): void {}

  public async register(): Promise<void> {
    let userCredentials = await this._auth.createUserWithEmailAndPassword(
      this._userInformation.credentialsInfo.username + '@gmail.com',
      this._userInformation.credentialsInfo.password
    );

    this._userInformation.credentialsInfo.password = null;

    let userInfo = await this._usersCollection
      .doc(userCredentials.user.uid)
      .set({ id: userCredentials.user.uid, ...this._userInformation });

    console.log(userInfo);
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
