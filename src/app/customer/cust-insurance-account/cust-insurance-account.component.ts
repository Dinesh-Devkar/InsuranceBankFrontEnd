import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-cust-insurance-account',
  templateUrl: './cust-insurance-account.component.html',
  styleUrls: ['./cust-insurance-account.component.css']
})
export class CustInsuranceAccountComponent implements OnInit {

  insuranceAccounts:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  ViewInsuranceAccountDetails(accountId:any){
    sessionStorage.setItem('insuranceAccountId',accountId)
    this.router.navigate(['/inuranceaccountdetails'])
  }
  ngOnInit(): void {
    this.dataService.GetInsuranceAccountsByCustomerId().subscribe((data:any)=>{
      
      this.insuranceAccounts=data.$values
    })
  }

}
