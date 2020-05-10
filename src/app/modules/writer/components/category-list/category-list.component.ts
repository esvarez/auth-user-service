import { Component, OnInit } from '@angular/core'
import {CategoryFacade} from '../../store/facade/category.facade'

@Component({
  selector: 'esb-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {

  isLoading$ = this.categoryFacade.isLoading$
  categories$ = this.categoryFacade.allCategories$

  constructor(public categoryFacade: CategoryFacade) { }

  ngOnInit(): void {
    this.categoryFacade.loadCategories()
  }
}
