import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import { environment } from '../../environments/environment'
import * as fromCategory from 'src/app/modules/writer/store/reducers/category.reducer'

export interface State {
  categoryState: fromCategory.CategoryState,
  ui: boolean
}

export const reducers: ActionReducerMap<State> = {
  categoryState: fromCategory.categoryReducer,
  ui: null
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state)
    console.log('action', action)
    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : []
