import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-insurance-scheme',
  templateUrl: './edit-insurance-scheme.component.html',
  styleUrls: ['./edit-insurance-scheme.component.css']
})
export class EditInsuranceSchemeComponent implements OnInit {

  img:any
  insuranceTypesList:any
  scheme=new FormGroup({
    insuranceTypeName:new FormControl('',Validators.required),
    insuranceSchemeName:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    newRegComission:new FormControl('',Validators.required),
    installmentComission:new FormControl('',Validators.required),
    note:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  get InsuranceType(){
    return this.scheme.get('insuranceTypeName');
  }
  get InsuranceScheme(){
    return this.scheme.get('insuranceSchemeName');
  }
  get Image(){
    return this.scheme.get('image');
  }
  get CommisionNew(){
    return this.scheme.get('newRegComission');
  }
   get CommisionInstallment(){
    return this.scheme.get('installmentComission');
  }
  get Note(){
    return this.scheme.get('note');
  }
  get Status(){
    return this.scheme.get('status');
  }

}
