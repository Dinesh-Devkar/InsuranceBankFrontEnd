import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {

  customer=new FormGroup({
    custId:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    loginid:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    nominee:new FormControl('',Validators.required),
    nomineerelation:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
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
