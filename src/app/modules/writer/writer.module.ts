import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NzAutocompleteModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzLayoutModule,
  NzListModule,
  NzMenuModule,
  NzMessageModule,
  NzModalModule, NzPopconfirmModule
} from 'ng-zorro-antd'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { IconsProviderModule} from '../icons-provider/icons-provider.module'
import { CategoriesComponent } from './pages/categories/categories.component'
import { AppRoutingModule} from '../../app-routing.module'
import { CategoryListComponent } from './components/category-list/category-list.component'
import { AddCategoryComponent } from './components/add-category/add-category.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostFormComponent } from './components/post-form/post-form.component'
import {ZoneTextComponent} from '../../shared/components/zone-text/zone-text.component'

@NgModule({
  declarations: [DashboardComponent, CategoriesComponent, CategoryListComponent, AddCategoryComponent, NewPostComponent, PostFormComponent, ZoneTextComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzListModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzPopconfirmModule
  ]
})
export class WriterModule { }
