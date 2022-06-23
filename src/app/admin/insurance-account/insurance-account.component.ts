import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-insurance-account',
  templateUrl: './insurance-account.component.html',
  styleUrls: ['./insurance-account.component.css']
})
export class InsuranceAccountComponent implements OnInit {

  insuranceAccounts:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  ShowFullInsuranceAccountDetails(accountNumber:string){
    sessionStorage.setItem('insuranceAccountId',accountNumber)
    this.router.navigate(['/admininsurancedetails'])
  }
  ngOnInit(): void {
    this.dataService.GetAllInsuranceAccounts().subscribe((data:any)=>{
      console.log(data)
      this.insuranceAccounts=data.$values
    })
  }

}
