import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {IconsProviderModule} from '../icons-provider/icons-provider.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule
  ]
})
export class WriterModule { }
