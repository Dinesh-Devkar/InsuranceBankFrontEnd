import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { EmployeeServiceService } from 'src/app/services/employee/employee-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  states:any
  cities:any
  currentCity:string=''
  currentNomineeRelation:string=''
  customer=new FormGroup({
    customerId:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    dateOfBirth:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    pinCode:new FormControl('',Validators.required),
    mobileNumber:new FormControl('',Validators.required),
    nomineeName:new FormControl('',Validators.required),
    nomineeRelation:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)

  })
  constructor(private dataService:DataServiceService,private customerService:CustomerServiceService,private router:Router,private employeeService:EmployeeServiceService) { }
  GenerateCityList(state:any){
    
    this.dataService.GetCitiesByState(state.value).subscribe((data:any)=>{
      
      this.cities=data.$values
    },(error:any)=>{
      console.log(error)
    })
  }
  UpdateCustomer(){
    console.log(this.customer.value)
    this.employeeService.UpdateCustomer(this.CustomerId?.value,this.customer.value).subscribe((data:any)=>{
      alert(data.message)
      if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
        this.router.navigate(['/dashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Agent"){
        this.router.navigate(['/agentdashboard'])
      }
      
    },(error:any)=>{
      alert(error.message)
    })

  }
  ngOnInit(): void {
    this.dataService.GetCustomerDetails(sessionStorage.getItem('customerId')).subscribe((data:any)=>{
      console.log(data)
      this.currentCity=data.city
      this.currentNomineeRelation=data.nomineeRelation
      this.customer.setValue({
        customerId:data.customerId,
        name:data.name,
        dateOfBirth:data.dateOfBirth,
        loginId:data.loginId,
        address:data.address,
        email:data.email,
        state:data.state,
        city:data.city,
        pinCode:data.pinCode,
        mobileNumber:data.mobileNumber,
        nomineeName:data.nomineeName,
        nomineeRelation:data.nomineeRelation,
        status:data.status
      })
    })
    this.dataService.GetAllStates().subscribe((data:any)=>{
      console.log(data)
      this.states=data.$values
    },(error:any)=>{
      alert(error.message)
    })
  }
  get CustomerId(){
    return this.customer.get('customerId');
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
  get Status(){
    return this.customer.get('status');
  }
 

}
