import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-change-password',
  templateUrl: './cust-change-password.component.html',
  styleUrls: ['./cust-change-password.component.css']
})
export class CustChangePasswordComponent implements OnInit {

  updatePasswordForm=new FormGroup({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',Validators.required),
    confirmNewPassword:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  get OldPassword(){
    return this.updatePasswordForm.get('oldPassword');
  }
  get NewPassword(){
    return this.updatePasswordForm.get('newPassword');
  }
  get ConfirmNewPassword(){
    return this.updatePasswordForm.get('confirmNewPassword');
  }

}
