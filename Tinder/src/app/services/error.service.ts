import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private _toastService: ToastService) {}

  public getErrors(control: any): void {
    let array = [];
    for (const prop in control) {
      for (const prop1 in control[prop].errors) {
        switch (prop1) {
          case 'required':
            array.push(`El campo ${prop[0].toUpperCase() + prop.substring(1)} es requerido`);
            break;
          case 'minlength':
            array.push(`Solo se permiten ${control[prop].errors.minlength.requiredLength} caracteres en el campo ${prop[0].toUpperCase() + prop.substring(1)}`);
            break;
          case 'maxlength':
            array.push(`Solo se permiten ${control[prop].errors.maxlength.requiredLength} caracteres en el campo ${prop[0].toUpperCase() + prop.substring(1)}`);
            break;
          case 'max':
            array.push(`El campo ${prop[0].toUpperCase() + prop.substring(1)} no debe exceder de ${control[prop].errors.max.max}`);
            break;
          case 'min':
            array.push(`El campo ${prop[0].toUpperCase() + prop.substring(1)} debe tener minimo ${control[prop].errors.min.min}`);
            break;
        }
      }
    }
    this._toastService.presentToast(array.join('\n'), 'top', 'light');
  }
}
