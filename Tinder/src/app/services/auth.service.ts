import { Injectable } from '@angular/core';

import { UserInfoInterface } from '../models/userInfoInterface';

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

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

  public async login(username: string, password: string): Promise<void> {
    console.log('USERNAME', username);
    console.log('PASSWORD', password);
    try {
      const result: any = await this._auth.signInWithEmailAndPassword(
        username + '@gmail.com',
        password
      );
      console.log('RESULT', result);
      this._getUserById(result.user.uid).subscribe((v) =>
        console.log('VALOR', v)
      );
    } catch (e) {
      console.log('NO TE PUDISTE LOGEAR');
    }
  }

  public async logOut(): Promise<void> {
    console.log('CERRANDO SESION...');
  }

  private _getUserById(id: string): Observable<any> {
    return this._usersCollection.doc(id).valueChanges();
  }
}

/* 
  {
    credentialsInfo: {
      username: "luisnvf7",
      password: "12345678"
    },
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
