import {Component, OnDestroy, OnInit} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd'
import {CategoryFacade} from '../../store/facade/category.facade'
import {combineLatest, forkJoin, Observable, pipe, Subscribable, Subscription} from 'rxjs'
import {map} from 'rxjs/operators'
import {error} from 'selenium-webdriver'

@Component({
  selector: 'esb-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  messageSubscription: Subscription
  statusSubscription: Subscription
  textMessage: string
  error$ = this.categoryFacade.error$
  isOpen$ = this.categoryFacade.isOpen$
  isUploading$ = this.categoryFacade.isUploading$
  categoryForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              public categoryFacade: CategoryFacade,
              private message: NzMessageService) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
    this.messageSubscription = this.categoryFacade.message$.subscribe(message => this.textMessage = message)
    this.statusSubscription = this.categoryFacade.isUploaded$.subscribe(isSuccess => {
      if (isSuccess != null) {
        isSuccess
          ? this.message.create('success', this.textMessage)
          : this.message.create('error', 'Error')
      }
    })
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe()
    this.messageSubscription.unsubscribe()
  }

  saveCategory(): void {
    const category = { ... this.categoryForm.value }
    this.categoryFacade.storeCategory(category)
  }
}
