import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent implements OnInit {

  scheme=new FormGroup({
    insuranceType:new FormControl('',Validators.required),
    insurancescheme:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    commisionNew:new FormControl('',Validators.required),
    commisionInstallment:new FormControl('',Validators.required),
    note:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get InsuranceType(){
    return this.scheme.get('insuranceType');
  }
  get InsuranceScheme(){
    return this.scheme.get('insurancescheme');
  }
  get Image(){
    return this.scheme.get('image');
  }
  get CommisionNew(){
    return this.scheme.get('commisionNew');
  }
   get CommisionInstallment(){
    return this.scheme.get('commisionInstallment');
  }
  get Note(){
    return this.scheme.get('note');
  }
  get Status(){
    return this.scheme.get('status');
  }
}
