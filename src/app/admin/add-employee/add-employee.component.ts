import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee=new FormGroup({
    userRoll:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    loginid:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    userStatus:new FormControl('',Validators.required)
  })
  constructor(private authService:AuthServiceService,private alert:AlertsService) { }

  AddUser(){
    console.log(this.employee.value)
    //alert(this.employee.value.password==this.employee.value.confirmPassword)
    if(this.employee.value.password==this.employee.value.confirmPassword){
      alert("inside confirm")
      alert(this.employee.value.userRoll);
      
      if(this.employee.value.userRoll=="Employee"){
        
          this.authService.EmployeeRegister(this.employee.value).subscribe((res:any)=>{
            console.log(res);
            // this.alert.Add()
            alert(res)
          },(error:any)=>{
            this.alert.Failed()
            console.log(error);
            
          })
         
      }
      else if(this.employee.value.userRoll=="Admin"){
        
        this.authService.AdminRegister(this.employee.value).subscribe((res:any)=>{
          console.log(res);
          // this.alert.Add()
          alert(res)
        },(error:any)=>{
          this.alert.Failed()
          console.log(error);
          
        })
       
    }
      return
    }
    alert("Password and Confirm Password does Not Matched")
  }
  ngOnInit(): void {
  }
  get EmployeeType(){
    return this.employee.get('userRoll');
  }
  get EmployeeName(){
    return this.employee.get('name');
  }
  get LoginId(){
    return this.employee.get('loginid');
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
