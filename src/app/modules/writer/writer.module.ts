import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule} from 'ng-zorro-antd';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NzLayoutModule
  ]
})
export class WriterModule { }
