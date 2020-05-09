import { Component, OnInit } from '@angular/core';
import {CategoryFacade} from '../../store/facade/category.facade'
import {Observable} from 'rxjs'
import {Category} from '../../../../shared/models'

@Component({
  selector: 'esb-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {

  isLoading$ = this.categoryFacade.isLoading
  categories$ = this.categoryFacade.allCategories$

  constructor(private categoryFacade: CategoryFacade) { }

  ngOnInit(): void {
    this.categoryFacade.loadCategories()
  }

}
