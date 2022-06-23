import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

adminForm=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  loginId:new FormControl(''),
  userRoll:new FormControl(''),
  userStatus:new FormControl('')

})
  constructor(private authService:AuthServiceService) {
    
   }

  ngOnInit(): void {
    this.authService.GetEmployeeDetails(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
      console.log(data)
      this.adminForm.setValue({
        name:data.name,
        email:data.email,
        loginId:data.loginId,
        userRoll:data.userRoll,
        userStatus:data.userStatus
      });
    },(error:any)=>{
      console.log(error)
    });
  }
  

}
