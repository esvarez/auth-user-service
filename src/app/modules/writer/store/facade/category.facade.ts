import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  CloseFormAction,
  DeleteCategoryAction,
  LoadCategoriesAction,
  OpenFormAction,
  StoreNewCategoryAction,
  UpdateCategoryAction
} from '../actions'
// import { WriterModuleState } from '../reducers'
import { Category } from '../../../../shared/models'
import { State } from 'src/app/store/reducer'

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {

  error$ = this.store.select(state => state.categoryState.error)
  message$ = this.store.select(state => state.categoryState.message)
  isOpen$ = this.store.select(state => state.categoryState.isOpen)
  isLoading$ = this.store.select(state => state.categoryState.isLoading)
  isLoaded$ = this.store.select(state => state.categoryState.isLoaded)
  isUploaded$ = this.store.select(state => state.categoryState.isUploaded)
  isUploading$ = this.store.select(state => state.categoryState.isUploading)
  allCategories$ = this.store.select(state => state.categoryState.categories)

  constructor(private store: Store<State>) { }

  public openForm() {
    this.store.dispatch(new OpenFormAction())
  }

  public closeForm() {
    this.store.dispatch(new CloseFormAction())
  }
  public loadCategories() {
    this.store.dispatch(new LoadCategoriesAction())
  }

  public storeCategory(category: Category) {
    this.store.dispatch(new StoreNewCategoryAction(category))
  }

  public updateCategory(category: Category) {
    this.store.dispatch(new UpdateCategoryAction(category))
  }

  public deleteCategory(category: Category) {
    this.store.dispatch(new DeleteCategoryAction(category))
  }
}
