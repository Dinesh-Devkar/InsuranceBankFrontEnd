import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent implements OnInit {

  user:string='';

  constructor(private auth:AuthServiceService) {
    //this.checkUser();
    
   }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(){
    //this.user='admin';
    //this.user='employee'
    this.auth.RefreshRequired.subscribe((data:any)=>{
      //this.user=data.error
      alert("Inside Navbar")
      setTimeout(()=>{
        this.user= this.auth.GetLoggedInUser();
        alert("LoggedIn user : "+this.auth.GetLoggedInUser())
      },1000)
      
  })
  }
}
