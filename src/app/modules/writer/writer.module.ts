import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {NzButtonModule, NzFormModule, NzInputModule, NzLayoutModule, NzListModule, NzMenuModule, NzModalModule} from 'ng-zorro-antd';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {IconsProviderModule} from '../icons-provider/icons-provider.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import {AppRoutingModule} from '../../app-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
=======
import {NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {IconsProviderModule} from '../icons-provider/icons-provider.module';
>>>>>>> master



@NgModule({
<<<<<<< HEAD
  declarations: [DashboardComponent, CategoriesComponent, CategoryListComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzListModule,
    NzMenuModule,
    NzModalModule,
=======
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule
>>>>>>> master
  ]
})
export class WriterModule { }
