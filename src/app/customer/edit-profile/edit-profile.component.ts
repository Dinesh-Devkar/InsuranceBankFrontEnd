import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
