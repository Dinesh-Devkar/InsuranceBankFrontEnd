import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-insurance-account',
  templateUrl: './insurance-account.component.html',
  styleUrls: ['./insurance-account.component.css']
})
export class InsuranceAccountComponent implements OnInit {

  insuranceAccounts:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetAllInsuranceAccounts().subscribe((data:any)=>{
      console.log(data)
      this.insuranceAccounts=data.$values
    })
  }

}
