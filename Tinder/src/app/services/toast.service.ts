import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _toastController: ToastController) { }

  public async presentToast(message: string, position: "top" | "bottom" | "middle", color : any) : Promise<void> {
    const toast = await this._toastController.create({
      message,
      duration: 2000,
      position,
      color
    });
    toast.present();
  }

}
