import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-insurance-type',
  templateUrl: './edit-insurance-type.component.html',
  styleUrls: ['./edit-insurance-type.component.css']
})
export class EditInsuranceTypeComponent implements OnInit {

  selectedFile: any;
  img: any;
  insuranceType=new FormGroup({
    insuranceName:new FormControl('',Validators.required),
    image:new FormControl(''),
    status:new FormControl('',Validators.required)
  })
  
  constructor() { }

  ngOnInit(): void {
  }
  get InsuranceType(){
    return this.insuranceType.get("insuranceName");
  }
  get Image(){
    return this.insuranceType.get("image");
  }
  get Status(){
    return this.insuranceType.get("status");
  }

}
