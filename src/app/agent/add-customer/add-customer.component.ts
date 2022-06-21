import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  statesList:any
  cityList:any
  customer=new FormGroup({
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
    agentCode:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
  })
  constructor(private dataService:DataServiceService,private agentService:AgentServiceService,private router:Router) { }

  GenerateCityList(state:any){
    this.dataService.GetCitiesByState(state.value).subscribe((data:any)=>{
      this.cityList=data.$values
      console.log(data)
    },(error:any)=>{
      alert(error.message)
    })
  }
  AddCustomer(){
    console.log(this.customer.value)
    this.agentService.AddCustomer(this.customer.value).subscribe((data:any)=>{
      alert(data.message)
      this.router.navigate(['/agentdashboard'])
    },(error:any)=>{
      alert(error.message)
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
  get Password(){
    return this.customer.get('password');
  }
  get ConfirmPassword(){
    return this.customer.get('confirmPassword');
  }
  get AgentCode(){
    return this.customer.get('agentCode');
  }

}
