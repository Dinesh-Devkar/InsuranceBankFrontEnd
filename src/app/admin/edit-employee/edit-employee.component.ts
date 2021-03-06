import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { EmployeeServiceService } from 'src/app/services/employee/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee=new FormGroup({
    userRoll:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    userStatus:new FormControl('',Validators.required),
    id:new FormControl('',Validators.required)
  })
  
  constructor(private dataService:DataServiceService,private employeeService:EmployeeServiceService,private router:Router,private alertService:AlertsService) {
    
   }

   UpdateEmployee(){
      this.employeeService.UpdateEmployee(this.employee.value).subscribe((data:any)=>{
        //alert(data.message)
        this.alertService.Success(data.message)
        if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
          this.router.navigate(['/empdashboard'])
        }
        else if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
          this.router.navigate(['/dashboard'])
        }
        
      },(error:any)=>{
        this.alertService.Failed(error.error.message)
      })
   }
  ngOnInit(): void {
    this.dataService.GetSelectedEmployee().subscribe((data:any)=>{
      
      console.log(data)
      this.employeeService.GetEmployeeDetails(data).subscribe((res:any)=>{
        console.log(res)
        this.employee.setValue({
          name:res.name,
          email:res.email,
          loginId:res.loginId,
          userRoll:res.userRoll,
          userStatus:res.userStatus,
          id:res.id
        })
      },(error:any)=>{
        console.log(error)
      })
    },(error:any)=>{
      alert(error.message)
    })

  }

  get EmployeeType(){
    return this.employee.get('userRoll');
  }
  get EmployeeName(){
    return this.employee.get('name');
  }
  get LoginId(){
    return this.employee.get('loginId');
  }
  get Password(){
    return this.employee.get('password');
  }
  get ConfirmPassword(){
    return this.employee.get('confirmPassword');
  }
  get Status(){
    return this.employee.get('userStatus');
  }
  get Email(){
    return this.employee.get('email');
  }
  
}
