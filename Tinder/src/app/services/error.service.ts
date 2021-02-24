import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _toastService : ToastService) { }

  public getErrors(error: string ) : void {
    
  }


}
