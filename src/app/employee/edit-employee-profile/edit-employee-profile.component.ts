import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-edit-employee-profile',
  templateUrl: './edit-employee-profile.component.html',
  styleUrls: ['./edit-employee-profile.component.css']
})
export class EditEmployeeProfileComponent implements OnInit {

  employeeForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    userRoll:new FormControl('',Validators.required),
    userStatus:new FormControl('',Validators.required)
  
  })
  constructor(private authService:AuthServiceService,private adminService:AdminServiceService,private router:Router,private alertService:AlertsService) { }

  UpdateEmployee(){
    this.adminService.UpdateEmployee(sessionStorage.getItem('loggedInUser'),this.employeeForm.value).subscribe((data:any)=>{
      this.alertService.Success(data.message)
      if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
        this.router.navigate(['/dashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
    },(error:any)=>{
      this.alertService.Failed(error.error.message)
    })
  }
  ngOnInit(): void {
    this.authService.GetEmployeeDetails(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
      this.employeeForm.setValue({
        name:data.name,
        email:data.email,
        loginId:data.loginId,
        userRoll:data.userRoll,
        userStatus:data.userStatus
      })
    })
  }
  get Name(){
    return this.employeeForm.get('name')
  }

}
