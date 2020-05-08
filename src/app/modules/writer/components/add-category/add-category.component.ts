import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'esb-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit {

  isVisible = false
  isOkLoading = false
  categoryForm = FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*
    this.categoryForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
     */
  }

  showModal(): void {
    this.isVisible = true;
  }
/*
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

 */
}
