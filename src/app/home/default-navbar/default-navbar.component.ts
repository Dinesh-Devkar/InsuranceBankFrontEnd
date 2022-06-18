import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent implements OnInit {

  user:string|null='';
  insuranceTypes:any

  constructor(private auth:AuthServiceService,private router:Router,private dataService:DataServiceService) {
    //this.checkUser();
    //this.user=''
    
   }
   GoToProtectionPlan(insuranceType:string){
     
        this.dataService.SetSelectedInsuranceType(insuranceType)
        this.router.navigate(['/protection'])
  }
  ngOnInit(): void {
   this.dataService.GetAllInsuranceTypes().subscribe((data:any)=>{
     console.log(data)
     this.insuranceTypes=data.$values
     console.log(this.insuranceTypes)
   },(error:any)=>{
     alert(error.error.message)
   })
    

   
   
    this.auth.RefreshRequired.subscribe((data:any)=>{
      alert("Inside Navbar")
      
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
    // this.user='customer'
    if(sessionStorage.getItem('loggedInuserRoll')==null){
      this.user=''
      return
    }
    this.user=sessionStorage.getItem('loggedInuserRoll');
    
    
  }
}
