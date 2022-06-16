import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee/employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeesList:any
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.GetAllEmployees().subscribe((data:any)=>{
      console.log("=================================")
      this.employeesList=data.$values
      console.log(data.$values)
    })
  }

}
