import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent implements OnInit {

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
  constructor(private dataService:DataServiceService,private router:Router,private alertService:AlertsService) { }

  AddInsurancePlan(){
    console.log(this.insurancePlan.value)
      this.dataService.AddInsurancePlan(this.insurancePlan.value).subscribe((data:any)=>{
        this.alertService.Success(data.message)
        this.router.navigate(['/dashboard'])
      },(error:any)=>{
        this.alertService.Failed(error.error.message)
      })
  }
  GenerateInsuranceSchemeList(insuranceType:any){
    
    this.dataService.GetAllInsuranceSchemesByInsuranceType(insuranceType.value).subscribe((data:any)=>{
      console.log(data)
      this.insuranceSchemesList=data.$values
    },(error:any)=>{
      alert(error.error.message)
    })
  }
  ngOnInit(): void {
    this.dataService.GetAllInsuranceTypes().subscribe((data:any)=>{
      console.log(data.$values)
      this.insuranceTypesList=data.$values
    })
    
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
