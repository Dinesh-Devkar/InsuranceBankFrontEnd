import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee=new FormGroup({
    userRoll:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    loginid:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    userStatus:new FormControl('',Validators.required)
  })
  
  constructor() { }

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
