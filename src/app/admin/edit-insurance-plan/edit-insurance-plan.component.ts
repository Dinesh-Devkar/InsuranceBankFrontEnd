import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-insurance-plan',
  templateUrl: './edit-insurance-plan.component.html',
  styleUrls: ['./edit-insurance-plan.component.css']
})
export class EditInsurancePlanComponent implements OnInit {

  insuranceTypesList:any
  insuranceSchemesList:any

  insurancePlan=new FormGroup({
    id:new FormControl('',Validators.required),
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
  constructor(private dataService:DataServiceService,private router:Router) { }

  GenerateInsuranceSchemesList(insuranceType:any){
    this.dataService.GetAllInsuranceSchemesByInsuranceType(insuranceType.value).subscribe((data:any)=>{
      this.insuranceSchemesList=data.$values
    })
  }
  UpdateInsurancePlan(){
    console.log(this.insurancePlan.value)
    this.dataService.UpdateInsurancePlan(this.Id?.value,this.insurancePlan.value).subscribe((data:any)=>{
      alert(data.message)
      if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
        this.router.navigate(['/dashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
    },(error:any)=>{
      alert(error.message)
      console.log(error)
    })
  }
  ngOnInit(): void {
    this.dataService.GetAllInsuranceTypes().subscribe((data:any)=>{
      this.insuranceTypesList=data.$values
    })
    
    this.dataService.GetInsurancePlan(sessionStorage.getItem('insurancePlanName')).subscribe((data:any)=>{
      console.log(data)
      this.insurancePlan.setValue({
        id:data.id,
        insuranceType:data.insuranceType,
        insuranceScheme:data.insuranceScheme,
        insurancePlanName:data.insurancePlanName,
        minimumYears:data.minimumYears,
        maximumYears:data.maximumYears,
        minimumAge:data.minimumAge,
        maximumAge:data.maximumAge,
        minimumInvestAmt:data.minimumInvestAmt,
        maximumInvestAmt:data.maximumInvestAmt,
        profitRatio:data.profitRatio,
        status:data.status
      })
      this.dataService.GetAllInsuranceSchemesByInsuranceType(data.insuranceType).subscribe((data:any)=>{
        this.insuranceSchemesList=data.$values
      })
    })
   
  }
  get Id(){
    return this.insurancePlan.get("id");
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
