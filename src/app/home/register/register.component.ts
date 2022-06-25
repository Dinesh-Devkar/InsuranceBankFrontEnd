import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  statesList:any
  cityList:any
  registerForm=new FormGroup({
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    loginId: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    mobileNumber:new FormControl('',Validators.required),
    pinCode:new FormControl('',Validators.required),
    nomineeName: new FormControl('', Validators.required),
    nomineeRelation: new FormControl('', Validators.required),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
  });
  constructor(private customerService:CustomerServiceService,private router:Router,private dataService:DataServiceService,private alertService:AlertsService){

  }

  GenerateCityList(state:any){
    this.dataService.GetCitiesByState(state.value).subscribe((data:any)=>{
      this.cityList=data.$values
      console.log(data)
    },(error:any)=>{
      alert(error.message)
    })
  }
  RegisterCustomer(){
    console.log(this.registerForm.value)
    this.customerService.RegisterCustomer(this.registerForm.value).subscribe((data:any)=>{
      console.log(data)
      //alert(data.message)
      this.alertService.Success(data.message)
      this.router.navigate(['/'])
    },(error:any)=>{
      console.log(error)
      this.alertService.Failed(error.error.message)
    }) 
   
  }
  ngOnInit(): void {
    this.dataService.GetAllStates().subscribe((data:any)=>{
      console.log(data)
      this.statesList=data.$values
    },(error:any)=>{
      alert(error.message)
    })
  }
  
}

