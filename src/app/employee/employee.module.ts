import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';



@NgModule({
  declarations: [
    HelloComponent,
    EmpDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
