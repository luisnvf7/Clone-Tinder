import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  personalForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(12), Validators.minLength(8)],
    ],
    age: ['', [Validators.required, Validators.max(120), Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _errorService: ErrorService
  ) {}

  ngOnInit() {}

  public onPersonal(): void {
    if (this.personalForm.status === 'INVALID') {
      this._errorService.getErrors(this.personalForm.controls);
    } else {
      this._authService.userInformation = {
        ...this._authService.userInformation,
        personalInformation: {
          name: this.personalForm.get('name').value,
          age: this.personalForm.get('age').value,
        },
      };
    }

    console.log(this.personalForm);

    // this.personalForm.setValue({ name: '', age: '' });
  }
}
