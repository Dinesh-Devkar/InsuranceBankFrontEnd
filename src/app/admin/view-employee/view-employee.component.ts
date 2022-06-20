import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { EmployeeServiceService } from 'src/app/services/employee/employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeesList:any
  constructor(private employeeService:EmployeeServiceService,private dataService:DataServiceService,private router:Router) { }

  GoToEditEmployeePage(id:string){
    
      this.dataService.SetSelectedEmployee(id)
      this.router.navigate(['/editemployee'])
  }
  ngOnInit(): void {
    this.employeeService.GetAllEmployees().subscribe((data:any)=>{
      
      this.employeesList=data.$values
      console.log(data.$values)
    })
  }

}
