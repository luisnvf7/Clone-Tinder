import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private _toastService: ToastService) {}

  public getErrorsControl(control: any): void {
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

  public getGenericErrors (error : string) : void {
    this._toastService.presentToast(error, 'top', 'light');
  }

  public cloudFirebaseErrors (error: string) : void {
    let errorMessage = ""

    switch(error){
      case "setDataError":
        errorMessage = "Error al momento de guardar datos"
        break;
      default:
        errorMessage = "Error Desconocido al momento de guardar datos"
        break;
    }
    this._toastService.presentToast(errorMessage, 'top', 'light');
  }

  public authenticationErrors (error: string) : void {

    let errorMessage = ""
    
    switch(error) {
      case "auth/wrong-password":
        errorMessage = "Contraseña incorrecta"
        break;
      case "auth/user-not-found":
        errorMessage = "Usuario no existente"
        break;
      case "auth/invalid-email":
        errorMessage = "Usuario invalido"
        break;
      case "auth/email-already-exists":
        errorMessage = "El nombre de usuario ya existe"
        break;
      case "auth/internal-error":
        errorMessage = "El servidor de autenticación encontró un error inesperado cuando se intentaba procesar la solicitud"
        break;
      default :
        errorMessage = "Error desconocido al momento de autenticar"
      break;
    }
    this._toastService.presentToast(errorMessage, 'top', 'light');
  }
}
