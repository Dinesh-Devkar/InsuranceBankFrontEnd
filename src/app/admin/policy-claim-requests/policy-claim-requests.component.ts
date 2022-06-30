import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';

@Component({
  selector: 'app-policy-claim-requests',
  templateUrl: './policy-claim-requests.component.html',
  styleUrls: ['./policy-claim-requests.component.css']
})
export class PolicyClaimRequestsComponent implements OnInit {

  policyClaimAccounts:any
  constructor(private adminService:AdminServiceService,private alertService:AlertsService) { }

  ApprovePolicyClaim(insuranceAccount:any){
    this.adminService.ApprovePolicyClaim(insuranceAccount).subscribe((data:any)=>{
    this.alertService.Success(data.message)
    this.adminService.GetAllRequestedPolicyClaims().subscribe((data:any)=>{
      this.policyClaimAccounts=data.$values
    })
    },(error:any)=>{
      this.alertService.Failed(error.error.message)
    })
  }
  ngOnInit(): void {
    this.adminService.GetAllRequestedPolicyClaims().subscribe((data:any)=>{
      this.policyClaimAccounts=data.$values
    })
  }
}
