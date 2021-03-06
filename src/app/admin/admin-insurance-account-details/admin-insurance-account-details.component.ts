import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-admin-insurance-account-details',
  templateUrl: './admin-insurance-account-details.component.html',
  styleUrls: ['./admin-insurance-account-details.component.css']
})
export class AdminInsuranceAccountDetailsComponent implements OnInit {

  paymentsList:any
  customerDetails:any
  insuranceAccountDetails:any
  constructor(private adminService:AdminServiceService,private dataService:DataServiceService,private router:Router) { }

  GoToDashboard(){
    if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
      this.router.navigate(['/dashboard'])
    }
    else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
      this.router.navigate(['/empdashboard'])
    }
    else if(sessionStorage.getItem('loggedInuserRoll')=="Agent"){
      this.router.navigate(['/agentdashboard'])
    }
    else if(sessionStorage.getItem('loggedInuserRoll')=="Customer"){
      this.router.navigate(['/customerdashboard'])
    }
  }
  ngOnInit(): void {
    this.adminService.GetInsuranceAccountDetailsByAccountId().subscribe((data:any)=>{
      console.log(data)
      this.insuranceAccountDetails=data
      this.adminService.GetCustomerDetails(data.customerId).subscribe((data:any)=>{
        this.customerDetails=data
      },(error:any)=>{
        alert(error.message)
        console.log(error)
      })
    },(error:any)=>{
      console.log(error)
    })
    this.dataService.GetPaymentDetails().subscribe((data:any)=>{
      console.log(data)
      this.paymentsList=data.$values
    },(error:any)=>{
      console.log(error)
    })
  }

}
