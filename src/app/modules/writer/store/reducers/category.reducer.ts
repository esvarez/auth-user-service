import { Category } from '../../../../shared/models'
import * as fromCategory from '../actions/category.action'

export interface CategoryState {
  isOpen: boolean
  isLoading: boolean
  isLoaded: boolean
  isUploading: boolean
  isUploaded: boolean
  message: string
  categories: Category[]
  error: any
}

const initState: CategoryState = {
  isOpen: null,
  isLoading: null,
  isLoaded: null,
  isUploading: null,
  isUploaded: null,
  categories: null,
  error: null,
  message: null
}

export function categoryReducer(state = initState, action: fromCategory.categoryActions): CategoryState {
  switch (action.type) {
    case fromCategory.OPEN_FORM:
      return {
        ...state,
        isOpen: true
      }
    case fromCategory.CLOSE_FORM:
      return {
        ...state,
        isOpen: false
      }
    case fromCategory.LOAD_CATEGORIES:
      return {
        ...state,
        isLoading: true
      }
    case fromCategory.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        categories: [ ...action.categories ]
      }
    case fromCategory.LOAD_CATEGORIES_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      }
    case fromCategory.STORE_NEW_CATEGORY:
      return {
        ...state,
        isUploading: true,
        isUploaded: null
      }
    case fromCategory.STORE_NEW_CATEGORY_SUCCESS:
      return {
        ...state,
        isUploaded: true,
        isUploading: false,
        isOpen: false,
        message: `${action.category.name} stored successfully`,
        categories: [
          ...state.categories,
          action.category
        ]
      }
    case fromCategory.STORE_NEW_CATEGORY_FAIL:
      return {
        ...state,
        isUploaded: false,
        isUploading: false,
        isOpen: false,
        error: action.payload
      }
    case fromCategory.UPDATE_CATEGORY:
      return {
        ...state,
        isUploading: true,
        isUploaded: null
      }
    case fromCategory.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isUploading: false,
        isUploaded: true,
        message: `${action.category.name} updated successfully`,
      }
    case fromCategory.UPDATE_CATEGORY_FAIL:
      return {
        ...state,
        isUploading: false,
        isUploaded: false
      }
    case fromCategory.DELETE_CATEGORY:
      return {
        ...state,
        isUploading: true,
        isUploaded: null
      }
    case fromCategory.DELETE_CATEGORY_SUCCESS:
      const filtered = state.categories.filter(category => category.id !== action.category.id )
      return {
        ...state,
        isUploaded: true,
        isUploading: false,
        message: `${action.category.name} deleted successfully`,
        categories: [ ... filtered ]
      }
    case fromCategory.DELETE_CATEGORY_FAIL:
      return {
        ...state,
        isUploading: false,
        isUploaded: false
      }
    default:
      return state
  }
}
