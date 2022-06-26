import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
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
  constructor(private authService:AuthServiceService,private alertService:AlertsService,private router:Router) { }

  UpdatePassword(){
    this.authService.UpdatePassword(this.updatePasswordForm.value).subscribe((data:any)=>{
      console.log(data)
      //alert(data.message)
      this.alertService.Success(data.message)
      this.updatePasswordForm.reset();
      if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
        this.router.navigate(['/dashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Agent"){
        this.router.navigate(['/agentdashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Customer"){
        this.router.navigate(['/customerdashboard'])
      }
      
    },(error:any)=>{
      console.log(error)
      this.alertService.Failed(error.error.message)
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
