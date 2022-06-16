import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  insurance=new FormGroup({
    insurancetype:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  get InsuranceType(){
    return this.insurance.get("insurancetype");
  }
  get Image(){
    return this.insurance.get("image");
  }
  get Status(){
    return this.insurance.get("status");
  }
}
