import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {NzModalRef, NzModalService} from 'ng-zorro-antd'
import {CategoryFacade} from '../../store/facade/category.facade'

@Component({
  selector: 'esb-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit {

  isOpen = this.categoryFacade.isOpen
  isUploading = this.categoryFacade.isUploading
  categoryForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              public categoryFacade: CategoryFacade) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
  }

  saveCategory(): void {
    const category = { ... this.categoryForm.value }
    this.categoryFacade.storeCategory(category)
  }
}
