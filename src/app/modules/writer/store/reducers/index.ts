import { State } from 'src/app/store/reducer'
import { CategoryState} from './category.reducer'

export interface WriterModuleState extends State {
  category: CategoryState
}

export { categoryReducer } from './category.reducer'
