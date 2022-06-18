import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

@Component({
  selector: 'app-agent-insurance-account',
  templateUrl: './agent-insurance-account.component.html',
  styleUrls: ['./agent-insurance-account.component.css']
})
export class AgentInsuranceAccountComponent implements OnInit {

  totalRs:number=0
  insuranceAccountsList:any
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetInsuranceAccounts().subscribe((data:any)=>{
      console.log(data.$values)
      this.insuranceAccountsList=data.$values
      this.CalCulaterTotalAmount()
    },(error:any)=>{
      alert(error.error.message)
    })
  }
  CalCulaterTotalAmount(){
    this.insuranceAccountsList.forEach((insuranceAccount:any)=>{{
      this.totalRs+=insuranceAccount.totalAmount
    }})
  }

}
