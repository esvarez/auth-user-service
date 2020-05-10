import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { CategoryFacade } from '../../store/facade/category.facade'

interface Option {
  label: string;
  value: string;
  age: number;
}

@Component({
  selector: 'esb-post-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.less']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup
  categories = this.categoryFacade.allCategories$

  inputValue: Option = { label: 'Lucy', value: 'lucy', age: 20 };
  options: Option[] = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];

  constructor(private fb: FormBuilder,
              public categoryFacade: CategoryFacade) {}

  compareFun = (o1: Option | string, o2: Option) => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.label : o1.value === o2.value;
    } else {
      return false;
    }
  };

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    })
  }

  submitForm(): void {
    for (const i in this.postForm.controls) {
      this.postForm.controls[i].markAsDirty()
      this.postForm.controls[i].updateValueAndValidity()
    }
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.postForm.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }
}
