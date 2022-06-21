import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor(private auth:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  noLogin=false;
  
   verifyRole(){
   
    
    this.noLogin=true; 
    console.log(this.noLogin)
    this.auth.Login(this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      this.auth.SetLoggedInUser(data.userRoll)
      sessionStorage.setItem('loggedInUser',data.userId)
      sessionStorage.setItem('loggedInuserRoll',data.userRoll)
      sessionStorage.setItem('token',data.token)
      if(data.userRoll=="Admin"){
        this.router.navigate(['/dashboard']);
      }
      else if(data.userRoll=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
      else if(data.userRoll=="Agent"){
        this.router.navigate(['/agentdashboard'])
      }
      else if(data.userRoll=="Customer"){
        sessionStorage.setItem('dateOfBirth',data.dateOfBirth)
        this.router.navigate(['/customerdashboard'])
      }
      
    },(error:any)=>{
      
      console.log("this is Errorr :    ")
      console.log(error.error.message)
      alert(error.error.message)

    }) 
  }
  GetAllAdmins(){
      // this.adminService.GetAllCustomers().subscribe((data:any)=>{
      //   console.log(data)
      //   alert(data)
      //   console.log(data.values)
      //   for(var item in data){
      //     console.log(item)
      //   }
        
      // },(error:any)=>{
      //   console.log(error)
      // })
  }
}
