import { Action } from '@ngrx/store'
import {Category} from '../../../../shared/models'

export const OPEN_FORM = '[CATEGORY] Open category Form'
export const CLOSE_FORM = '[CATEGORY] Close category Form'
export const STORE_NEW_CATEGORY = '[CATEGORY] Store new category'
export const STORE_NEW_CATEGORY_SUCCESS = '[CATEGORY] Store new category success'
export const STORE_NEW_CATEGORY_FAIL = '[CATEGORY] Store new category fail'
export const LOAD_CATEGORIES = '[CATEGORY] Load Category'
export const LOAD_CATEGORIES_SUCCESS = '[CATEGORY] Load categories success'
export const LOAD_CATEGORIES_FAIL = '[CATEGORY] Load categories fail'
export const UPDATE_CATEGORY = '[CATEGORY] Update category'
export const UPDATE_CATEGORY_SUCCESS = '[CATEGORY] Update category success'
export const UPDATE_CATEGORY_FAIL = '[CATEGORY] Update category fail'
export const DELETE_CATEGORY = '[CATEGORY] Delete category action'
export const DELETE_CATEGORY_SUCCESS = '[CATEGORY] Delete category success'
export const DELETE_CATEGORY_FAIL = '[CATEGORY] Delete category fail'

export class OpenFormAction implements Action {
  readonly type = OPEN_FORM
  constructor() { }
}

export class CloseFormAction implements Action {
  readonly type = CLOSE_FORM
  constructor() { }
}

export class StoreNewCategoryAction implements Action {
  readonly type = STORE_NEW_CATEGORY
  constructor(public category: Category) { }
}

export class StoreNewCategorySuccessAction implements Action {
  readonly type = STORE_NEW_CATEGORY_SUCCESS
  constructor(public category: Category) { }
}

export class StoreNewCategoryFailAction implements Action {
  readonly type = STORE_NEW_CATEGORY_FAIL
  constructor(public payload: any) { }
}

export class LoadCategoriesAction implements Action {
  readonly type = LOAD_CATEGORIES
  constructor() { }
}

export class LoadCategoriesSuccessAction implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS
  constructor(public categories: Category[]) { }
}

export class LoadCategoriesFailAction implements Action {
  readonly type = LOAD_CATEGORIES_FAIL
  constructor(public payload: any) { }
}

export class UpdateCategoryAction implements Action {
  readonly type = UPDATE_CATEGORY
  constructor(public category: Category) { }
}

export class UpdateCategorySuccessAction implements Action {
  readonly type = UPDATE_CATEGORY_SUCCESS
  constructor(public category: Category) { }
}

export class UpdateCategoryFailAction implements Action {
  readonly type = UPDATE_CATEGORY_FAIL
  constructor(public payload: any) { }
}

export class DeleteCategoryAction implements Action {
  readonly type = DELETE_CATEGORY
  constructor(public category: Category) { }
}

export class DeleteCategorySuccessAction implements Action {
  readonly type = DELETE_CATEGORY_SUCCESS
  constructor(public category: Category) { }
}

export class DeleteCategoryFailAction implements Action {
  readonly type = DELETE_CATEGORY_FAIL
  constructor(public payload: any) { }
}

export type categoryActions = OpenFormAction
  | CloseFormAction
  | StoreNewCategoryAction
  | StoreNewCategorySuccessAction
  | StoreNewCategoryFailAction
  | LoadCategoriesAction
  | LoadCategoriesSuccessAction
  | LoadCategoriesFailAction
  | UpdateCategoryAction
  | UpdateCategoryFailAction
  | UpdateCategorySuccessAction
  | DeleteCategoryAction
  | DeleteCategoryFailAction
  | DeleteCategorySuccessAction
