import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent implements OnInit {

  user:string|null='';

  constructor(private auth:AuthServiceService,private router:Router) {
    //this.checkUser();
    //this.user=''
    
   }

  ngOnInit(): void {
    //this.user=sessionStorage.getItem('loggedInuserRoll');
    this.auth.RefreshRequired.subscribe((data:any)=>{
      //this.user=data.error
      alert("Inside Navbar")
      // setTimeout(()=>{
      //   if(sessionStorage.getItem('loggedInuserRoll')==null){
      //     this.user=''
      //     return
      //   }
      //   this.user=sessionStorage.getItem('loggedInuserRoll');
      //   alert("LoggedIn user : "+this.auth.GetLoggedInUser())
      // },1000)
      setTimeout(()=>{
        this.checkUser();
      },1000)
      
      
  })
    this.checkUser();
  }
Logout(){
  sessionStorage.clear();
  this.checkUser();
  this.router.navigate([''])

}
  checkUser(){
    //this.user='admin';
    //this.user='employee'
    if(sessionStorage.getItem('loggedInuserRoll')==null){
      this.user=''
      return
    }
    this.user=sessionStorage.getItem('loggedInuserRoll');
    
    
  }
}
