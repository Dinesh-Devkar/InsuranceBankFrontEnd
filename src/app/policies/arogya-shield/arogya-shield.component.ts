import { Component, OnInit } from '@angular/core';

import { DataServiceService } from 'src/app/services/data/data-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-arogya-shield',
  templateUrl: './arogya-shield.component.html',
  styleUrls: ['./arogya-shield.component.css']
})
export class ArogyaShieldComponent implements OnInit {	
 
isEligible:boolean=true
  planDetails=new FormGroup({
    minimumYears:new FormControl(''),
    maximumYears:new FormControl(''),
    minimumAge:new FormControl(''),
    maximumAge:new FormControl(''),
    minimumInvestAmt:new FormControl(''),
    maximumInvestAmt:new FormControl(''),
    profitRatio:new FormControl('')
  })
  isUserLoggedIn=sessionStorage.getItem('loggedInuserRoll')
  selectedPlan:any
  selectedScheme:any
  intrestRate:number=7.0;
  numberOfYears:number=0;
  investmentAmount:number=0;
  months:number=0;
  installmentAmont:number=0;
  intrestAmount:any;
  totalAmount=0;
  isCustomerLogIn:boolean=true;
  agentCode:number=0
  customerName:string=''

  //Calculate loggedInUser Age
  
	today = new Date(); 

  
  
  constructor(private dataService:DataServiceService,private router:Router,private customerService:CustomerServiceService) { }

  ngOnInit(): void {
    //this.k=JSON.parse(localStorage.getItem('dateOfBirth'))
    
  let dob = new Date(sessionStorage.getItem('dateOfBirth') || this.today); 
  let Time = this.today.getTime() - dob.getTime(); 
  let Days = Time / (1000 * 3600 * 24); //Diference in Days
  let age=Days/365
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
           profitRatio:res.profitRatio
         })
         if(age<res.minimumAge || age>res.maximumAge){
           //alert("You Are Not Eligible")
           this.isEligible=false
         }
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
    
    this.customerService.GetCustomerNameAgentCode().subscribe((data:any)=>{
      console.log("UUUUUUUUUUUUUUUUUUUU")
      console.log(data)
      this.customerName=data.customerName
      this.agentCode=data.agentCode
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
      installmentAmount: Math.round(this.installmentAmont),
      interestAmount: this.intrestAmount,
      totalAmount: this.totalAmount,
      dateCreated: new Date(),
      maturityDate: c,
      customerName: this.customerName,
      customerId: sessionStorage.getItem("loggedInUser"),
      agentCode: this.agentCode
    }

    this.dataService.SetInsuranceAccountDetails(insuranceAccount);
    this.router.navigate(['/buyinsurance'])
  }
  get ProfitRatio():number{
    return this.planDetails.get('profitRatio')?.value
  }
  fillFields(){
    this.intrestAmount= (this.investmentAmount * this.ProfitRatio*this.numberOfYears)/100
    this.totalAmount=this.investmentAmount+this.intrestAmount;
    this.installmentAmont=this.investmentAmount / this.numberOfYears;    
  }

}
