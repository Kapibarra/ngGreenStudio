import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from './form';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  mail!: Mail;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      Email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      service: [null],
      phone: [null, Validators.required, Validators.minLength(10)],
    });
  }

  ngOnInit(): void {}
  onSubmit(formValue: any) {
    var formData = new FormData();
    for (var key in formValue) {
      formData.append(key, formValue[key]);
    }
    this.http
      .post('/assets/handler.php', formData)
      .subscribe((responce: any) => {});

    const popUp = document.getElementById('popUp');
    setTimeout(() => {
      popUp?.classList.add('popUpVisible');
    }, 1000);
    setTimeout(() => {
      document.getElementById('popUp')?.classList.remove('popUpVisible');
    }, 4000);
  }
  getFormControl(name: string): FormControl {
    let control = this.form.controls[name] as FormControl;
    return control;
  }
}
