import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

updatePasswordForm=new FormGroup({
  oldPassword:new FormControl('',Validators.required),
  newPassword:new FormControl('',Validators.required),
  confirmNewPassword:new FormControl('',Validators.required)
})
  constructor(private authService:AuthServiceService) { }

  UpdatePassword(){
    this.authService.UpdatePassword(this.updatePasswordForm.value).subscribe((data:any)=>{
      console.log(data)
      alert(data.message)
      this.updatePasswordForm.reset();
      
      
    },(error:any)=>{
      console.log(error)
      alert(error.error.message)
      // this.updatePasswordForm.setValue({
      //   oldPassword:'',
      //   newPassword:'',
      //   confirmNewPassword:''
      // })
      this.updatePasswordForm.reset();
    })

  }
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
