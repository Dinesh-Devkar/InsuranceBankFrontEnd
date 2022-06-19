import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  planDetailsForm=new FormGroup({
    insuranceType: new FormControl(''),
      insuranceScheme: new FormControl(''),
      numberOfYears:new FormControl(''),
      profitRatio: new FormControl(''),
      investmentAmount: new FormControl(''),
      premiumType: new FormControl(''),
      installmentAmount: new FormControl(''),
      interestAmount: new FormControl(''),
      totalAmount: new FormControl(''),
      dateCreated: new FormControl(''),
      maturityDate:new FormControl(''),
      customerName: new FormControl(''),
      customerId: new FormControl(''),
      agentCode: new FormControl('')
  })
  constructor(private dataService:DataServiceService,private customerService:CustomerServiceService) { }
  PurchaseInsurancePlan(){
    this.customerService.PurchaseInsurancePlan(this.planDetailsForm.value).subscribe((data:any)=>{
      console.log(data)
      alert(data.message)
    },(error:any)=>{
      alert(error.error.message)
      console.log(error)
    })
  }

  ngOnInit(): void {
    
    console.log(this.dataService.GetInsuranceAccountDetails())
    //this.planDetailsForm=this.dataService.GetInsuranceAccountDetails()
    let data=this.dataService.GetInsuranceAccountDetails();
    
    this.planDetailsForm.setValue({
      insuranceType: data.insuranceType,
      insuranceScheme: data.insuranceScheme,
      numberOfYears:data.numberOfYears,
      profitRatio: data.profitRatio,
      investmentAmount: data.investmentAmount,
      premiumType: data.premiumType,
      installmentAmount: data.installmentAmount,
      interestAmount: data.interestAmount,
      totalAmount: data.totalAmount,
      dateCreated: data.dateCreated,
      maturityDate:data.maturityDate,
      customerName: data.customerName,
      customerId: data.customerId,
      agentCode: data.agentCode
    })
    console.log(this.planDetailsForm)
  }

}
