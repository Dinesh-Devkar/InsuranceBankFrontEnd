import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
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
  constructor(private authService:AuthServiceService,private adminService:AdminServiceService) { }

  UpdateEmployee(){
    this.adminService.UpdateEmployee(sessionStorage.getItem('loggedInUser'),this.employeeForm.value).subscribe((data:any)=>{
      alert(data.message)
    },(error:any)=>{
      alert(error.error.message)
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

}
