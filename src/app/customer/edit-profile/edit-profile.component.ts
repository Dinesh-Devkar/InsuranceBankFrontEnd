import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  customer=new FormGroup({
    
    name:new FormControl('',  Validators.required),
    loginId:new FormControl('',  Validators.required),
    email:new FormControl('',  Validators.required),
    address:new FormControl('',  Validators.required),
    dateOfBirth:new FormControl('',  Validators.required),
    city:new FormControl('',  Validators.required),
    state:new FormControl('',  Validators.required),
    mobileNumber:new FormControl('',  Validators.required),
    nomineeName:new FormControl('',  Validators.required),
    nomineeRelation:new FormControl('',  Validators.required),
    pinCode:new FormControl('',  Validators.required),
    status:new FormControl('',  Validators.required)

  })
  states:any
  cities:any
  currentCity:string=''
  currentState:string=''
  
  constructor(private customerService:CustomerServiceService,private dataService:DataServiceService,private router:Router) { }

  GenerateCityList(state:any){
    
    this.dataService.GetCitiesByState(state.value).subscribe((data:any)=>{
      
      this.cities=data.$values
    },(error:any)=>{
      console.log(error)
    })
  }
  UpdateData(){
    console.log(this.customer.value)
    this.customerService.UpdateCustomer(sessionStorage.getItem('loggedInUser'),this.customer.value).subscribe((data:any)=>{
      alert(data.message)
      this.router.navigate(['/customerdashboard'])

    },(error:any)=>{
      alert(error.message)
      console.log(error)
    })
  }
  ngOnInit(): void {
    this.customerService.GetCustomerDetails().subscribe((data:any)=>{
      
     this.currentCity=data.city
     this.currentState=data.state
      this.customer.setValue({
        name:data.name,
        loginId:data.loginId,
        email:data.email,
        address:data.address,
        dateOfBirth: data.dateOfBirth,       
        state:data.state,
        city:data.city,
        mobileNumber:data.mobileNumber,
        nomineeName:data.nomineeName,
        nomineeRelation:data.nomineeRelation,
        pinCode:data.pinCode,
        status:data.status
      })
     
    })
    this.dataService.GetAllStates().subscribe((data:any)=>{
      this.states=data.$values
      console.log(data)
    })
  }
  get CustId(){
    return this.customer.get('custId');
  }
  get Name(){
    return this.customer.get('name');
  }
  get Date(){
    return this.customer.get('dateOfBirth');
  }
  get LoginId(){
    return this.customer.get('loginId');
  }
  get Address(){
    return this.customer.get('address');
  }
  get Email(){
    return this.customer.get('email');
  }
  get State(){
    return this.customer.get('state');
  }
  get City(){
    return this.customer.get('city');
  }
  get PinCode(){
    return this.customer.get('pinCode');
  }
  get Mobile(){
    return this.customer.get('mobileNumber');
  }
  get Nominee(){
    return this.customer.get('nomineeName');
  }
  get NomineeRelation(){
    return this.customer.get('nomineeRelation');
  }
  
}
