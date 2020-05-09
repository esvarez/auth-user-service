import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { CategoryService } from '../../../../core/services/category.service'

import * as categoryActions from '../actions'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryEffects {

  constructor(private actions$: Actions,
              private categoryService: CategoryService) { }

  @Effect()
  loadCategories$ = this.actions$
    .pipe(
      ofType( categoryActions.LOAD_CATEGORIES),
      switchMap(() => {
        return this.categoryService.getCategories()
          .pipe(
            map( categories => new categoryActions.LoadCategoriesSuccessAction(categories)),
            catchError( err => of(new categoryActions.LoadCategoriesFailAction(err)))
          )
      })
    )

  @Effect()
  addCategory$ = this.actions$
    .pipe(
      ofType( categoryActions.STORE_NEW_CATEGORY),
      switchMap(action => {
        return this.categoryService.saveCategory(action['category'])
          .pipe(
            map( categorySaved => new categoryActions.StoreNewCategorySuccessAction(categorySaved)),
            catchError( err => of(new categoryActions.StoreNewCategoryFailAction(err)))
          )
      })
    )

  @Effect()
  updateCategory$ = this.actions$
    .pipe(
      ofType(categoryActions.UPDATE_CATEGORY),
      switchMap(category => {
        return this.categoryService.updateCategory(category)
          .pipe(
            map(categoryUpdated => new categoryActions.UpdateCategorySuccessAction(categoryUpdated)),
            catchError( err => of(new categoryActions.UpdateCategoryFailAction(err)))
          )
      })
    )

  @Effect()
  deleteCategory$ = this.actions$
    .pipe(
      ofType(categoryActions.DELETE_CATEGORY),
      switchMap(id => {
        return this.categoryService.deleteCategory(id)
          .pipe(
            map( idDeleted => new categoryActions.DeleteCategorySuccessAction(idDeleted)),
            catchError(err => of(new categoryActions.DeleteCategoryFailAction(err)))
          )
      })
    )
}
