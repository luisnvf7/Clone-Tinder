import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading: any

  constructor(private _loadingController: LoadingController) { }

  public async presentLoading() {
    /** Nuevo */
    this._loading = await this._loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await this._loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  public async onDismissLoading () {

    await this._loading.dismiss()

  }

}
