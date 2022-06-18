import { Component, OnInit } from '@angular/core';

import { DataServiceService } from 'src/app/services/data/data-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arogya-shield',
  templateUrl: './arogya-shield.component.html',
  styleUrls: ['./arogya-shield.component.css']
})
export class ArogyaShieldComponent implements OnInit {	
 

  planDetails=new FormGroup({
    minimumYears:new FormControl(''),
    maximumYears:new FormControl(''),
    minimumAge:new FormControl(''),
    maximumAge:new FormControl(''),
    minimumInvestAmt:new FormControl(''),
    maximumInvestAmt:new FormControl(''),
    profitRatio:new FormControl('')
  })
  selectedPlan:any
  selectedScheme:any
  intrestRate:number=7.0;
  numberOfYears:number=0;
  investmentAmount:number=0;
  months:number=0;
  installmentAmont:number=0;
  intrestAmount:number=0;
  totalAmount=0;
  isCustomerLogIn:boolean=true;
  constructor(private dataService:DataServiceService,private router:Router) { }

  ngOnInit(): void {

    this.dataService.GetSelectedInsurancePlan().subscribe((data:any)=>{
      if(data !=''){
        this.dataService.GetInsurancePlan(data).subscribe((res:any)=>{
          
          
         this.selectedPlan=res
        
         this.planDetails.setValue({
           minimumYears:res.minimumYears,
           maximumYears:res.maximumYears,
           minimumAge:res.minimumAge,
           maximumAge:res.maximumAge,
           minimumInvestAmt:res.minimumInvestAmt,
           maximumInvestAmt:res.maximumInvestAmt,
           profitRatio:res.profitRatio+'.00%'
         })
        },(error:any)=>{
          alert(error.error.message)
        })
      }
      
    })
    this.dataService.GetSelectedInsuranceScheme().subscribe((data:any)=>{
      
      if(data !=''){
        this.dataService.GetInsuranceSchemeDetails(data).subscribe((res:any)=>{
          
          this.selectedScheme=res
          console.log(res)
          
        },(error:any)=>{
          alert(error.error.message)
        })
      }
      
      
      
    },(error:any)=>{
      alert(error.error.message)
    })
    
    
  }
  GoToConfirmDetailsPage(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year + this.numberOfYears, month, day);
    console.log(c);
    let insuranceAccount={
      insuranceType: this.selectedPlan.insuranceType,
      insuranceScheme: this.selectedPlan.insuranceScheme,
      numberOfYears: this.numberOfYears,
      profitRatio: this.planDetails.get('profitRatio')?.value,
      investmentAmount: this.investmentAmount,
      premiumType: this.months,
      installmentAmount: this.installmentAmont,
      interestAmount: this.intrestAmount,
      totalAmount: this.totalAmount,
      dateCreated: new Date(),
      maturityDate: c,
      customerName: sessionStorage.getItem("name"),
      customerId: sessionStorage.getItem("loggedInUser"),
      agentCode: sessionStorage.getItem("agentCode")
    }

    this.dataService.SetInsuranceAccountDetails(insuranceAccount);
    this.router.navigate(['/buyinsurance'])
  }
  fillFields(){
    this.intrestAmount= (this.investmentAmount * this.intrestRate *this.numberOfYears )/100
    this.totalAmount=this.investmentAmount+this.intrestAmount;
    this.installmentAmont=this.totalAmount / this.months;    
  }

}
