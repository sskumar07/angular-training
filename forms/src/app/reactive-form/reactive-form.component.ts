import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../password.validator';
import { forbiddenNames, forbiddenNameValidator } from '../username-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  get username() {
    return this.registrationForm.get("userName");
  }

  get getDynamicFields() {
    return this.registrationForm.get("dynamicFields") as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  // registrationForm = new FormGroup({
  //   "userName": new FormControl('123'),
  //   "password": new FormControl(''),
  //   "confirmPassword": new FormControl(''),
  //   "email": new FormControl(''),
  //   "subscribe": new FormControl(''),
  //   "address": new FormGroup({
  //     "city": new FormControl(),
  //     "state": new FormControl()
  //   }),
  //   dynamicFields: this.formBuilder.array([])
  // });

  registrationForm = this.formBuilder.group({
    userName: ['111', [Validators.required, Validators.minLength(4), forbiddenNameValidator, forbiddenNames(/password/)]],
    password: [''],
    confirmPassword: [''],
    email: [''],
    subscribe: [''],
    address: this.formBuilder.group({
      city: [''],
      state: ['']
    }),
    dynamicFields: this.formBuilder.array([])
  }, { validator: passwordValidator });

  ngOnInit(): void {

    this.registrationForm.setValue({
      userName: 'Kumar',
      password: '',
      confirmPassword: '',
      email: '',
      subscribe: '',
      address: {
        city: '',
        state: 'Tamilnadu'
      },
      dynamicFields: []
    });

    this.registrationForm.get("userName").setValue("Demo User");

    this.registrationForm.patchValue({
      password: 'kumar'
    });

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkValue => {
      if (checkValue) {
        this.registrationForm.get('email').setValidators([Validators.required]);
      } else {
        this.registrationForm.get('email').setValidators(null);
        this.registrationForm.get('email').setErrors(null);
      }
      this.registrationForm.get('email').updateValueAndValidity;
    });
  }

  addDynamicField() {
    this.getDynamicFields.push(this.formBuilder.control(''));
  }

}
