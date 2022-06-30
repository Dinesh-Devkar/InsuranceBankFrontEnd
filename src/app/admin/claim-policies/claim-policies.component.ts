import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';

@Component({
  selector: 'app-claim-policies',
  templateUrl: './claim-policies.component.html',
  styleUrls: ['./claim-policies.component.css']
})
export class ClaimPoliciesComponent implements OnInit {

  policyClaimAccounts:any
  constructor(private adminService:AdminServiceService,private alertService:AlertsService) { }
  
  ngOnInit(): void {
    this.adminService.GetAllClaimedPolicies().subscribe((data:any)=>{
      this.policyClaimAccounts=data.$values
    })
  }

}
