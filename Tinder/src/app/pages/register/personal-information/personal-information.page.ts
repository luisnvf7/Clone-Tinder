import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  public personalForm = this._fb.group({
    name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(5)],],
    age: ['', [Validators.required, Validators.max(120), Validators.min(1)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _errorService: ErrorService
  ) {}

  ngOnInit() {}

  public onBack(): void {
    this._authService.clearAttribute('personalInformation');
    this.personalForm.patchValue({ name: '', age: '' });
  }

  public onPersonal(): void {
    if (this.personalForm.status === 'INVALID') {
      this._errorService.getErrorsControl(this.personalForm.controls);
    } else {
      this._authService.userInformation = {
        ...this._authService.userInformation,
        personalInformation: {
          name: this.personalForm.get('name').value,
          age: this.personalForm.get('age').value,
        },
      };
    }
  }
}
