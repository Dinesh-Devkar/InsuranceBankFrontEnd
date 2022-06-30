import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-customer-claim-policies',
  templateUrl: './customer-claim-policies.component.html',
  styleUrls: ['./customer-claim-policies.component.css']
})
export class CustomerClaimPoliciesComponent implements OnInit {

  policyClaimAccounts:any
  constructor(private customerService:CustomerServiceService,private alertService:AlertsService) { }
  
  ngOnInit(): void {
    this.customerService.GetAllClaimedPoliciesByCustomerId(sessionStorage.getItem('loggedInUser') || '').subscribe((data:any)=>{
      this.policyClaimAccounts=data.$values
    })
  }


}
