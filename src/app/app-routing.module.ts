import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './modules/writer/pages/dashboard/dashboard.component';
import {CategoriesComponent} from './modules/writer/pages/categories/categories.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/writer' },
  { path: 'writer', component: DashboardComponent,
    children: [
      { path: 'categories', component: CategoriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
