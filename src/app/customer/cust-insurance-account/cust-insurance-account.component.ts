import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-cust-insurance-account',
  templateUrl: './cust-insurance-account.component.html',
  styleUrls: ['./cust-insurance-account.component.css']
})
export class CustInsuranceAccountComponent implements OnInit {

  insuranceAccounts:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetInsuranceAccountsByCustomerId().subscribe((data:any)=>{
      console.log(data)
      this.insuranceAccounts=data.$values
    })
  }

}
