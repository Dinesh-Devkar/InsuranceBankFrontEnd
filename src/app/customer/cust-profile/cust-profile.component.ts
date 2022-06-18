import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {

  customer=new FormGroup({
    
    name:new FormControl(''),
    loginId:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    dateOfBirth:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    mobileNumber:new FormControl(''),
    nomineeName:new FormControl(''),
    nomineeRelation:new FormControl(''),
    pinCode:new FormControl(''),
    status:new FormControl('')

  })
  constructor(private customerService:CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.GetCustomerDetails().subscribe((data:any)=>{
      console.log(data)
      this.customer.setValue({
        name:data.name,
        loginId:data.loginId,
        email:data.email,
        address:data.address,
        dateOfBirth:data.dateOfBirth,
        city:data.city,
        state:data.state,
        mobileNumber:data.mobileNumber,
        nomineeName:data.nomineeName,
        nomineeRelation:data.nomineeRelation,
        pinCode:data.pinCode,
        status:data.status
      })
    })
  }

  get CustId(){
    return this.customer.get('custId');
  }
  get Name(){
    return this.customer.get('name');
  }
  get Date(){
    return this.customer.get('date');
  }
  get LoginId(){
    return this.customer.get('loginid');
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
    return this.customer.get('pincode');
  }
  get Mobile(){
    return this.customer.get('mobile');
  }
  get Nominee(){
    return this.customer.get('nominee');
  }
  get NomineeRelation(){
    return this.customer.get('nomineerelation');
  }
  get Password(){
    return this.customer.get('password');
  }
}
