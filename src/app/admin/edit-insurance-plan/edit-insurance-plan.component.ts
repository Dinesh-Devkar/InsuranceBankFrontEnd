import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-insurance-plan',
  templateUrl: './edit-insurance-plan.component.html',
  styleUrls: ['./edit-insurance-plan.component.css']
})
export class EditInsurancePlanComponent implements OnInit {

  insuranceTypesList:any
  insuranceSchemesList:any

  insurancePlan=new FormGroup({
    insuranceType:new FormControl('',Validators.required),
    insuranceScheme:new FormControl('',Validators.required),
    insurancePlanName:new FormControl('',Validators.required),
    minimumYears:new FormControl('',Validators.required),
    maximumYears:new FormControl('',Validators.required),
    minimumAge:new FormControl('',Validators.required),
    maximumAge:new FormControl('',Validators.required),
    minimumInvestAmt:new FormControl('',Validators.required),
    maximumInvestAmt:new FormControl('',Validators.required),
    profitRatio:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
  }
  get InsuranceType(){
    return this.insurancePlan.get("insuranceType");
  }
  get InsuranceScheme(){
    return this.insurancePlan.get("insuranceScheme");
  }
  get InsurancePlan(){
    return this.insurancePlan.get("insurancePlanName");
  }
  get MinimumYears(){
    return this.insurancePlan.get("minimumYears");
  }
  get MaximumYears(){
    return this.insurancePlan.get("maximumYears");
  }
  get MinimumAge(){
    return this.insurancePlan.get("minimumAge");
  }
  get MaximumAge(){
    return this.insurancePlan.get("maximumAge");
  }
  get MinimumInvestAmt(){
    return this.insurancePlan.get("minimumInvestAmt");
  }
  get MaximumInvestAmt(){
    return this.insurancePlan.get("maximumInvestAmt");
  }
  get ProfitRatio(){
    return this.insurancePlan.get("profitRatio");
  }
  get Status(){
    return this.insurancePlan.get("status");
  }
}
