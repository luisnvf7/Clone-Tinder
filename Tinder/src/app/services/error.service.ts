import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _toastService : ToastService) { }

  public getErrors(control: any) : void {
    let array = []
      for (const prop in control) {
        for (const prop1 in control[prop].errors) {
          switch(prop1) {
            case "minlength": 
              array.push(`Por favor ingrese mas datos en ${prop}`)
            break;
            case "required":
              array.push(`${ prop[0].toUpperCase() + prop.substring(1)} es requerido`)
          }
        }
      }
      this._toastService.presentToast(array.join("\n"), "top", "light")
  }


}
