import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

@Component({
  selector: 'app-agent-policy-payment',
  templateUrl: './agent-policy-payment.component.html',
  styleUrls: ['./agent-policy-payment.component.css']
})
export class AgentPolicyPaymentComponent implements OnInit {

  totalAmount:number=0
  commissionRecordsList:any
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetCommissionRecords().subscribe((data:any)=>{
      console.log(data)
      this.commissionRecordsList=data.$values
      this.CalCulaterTotalAmount()
      
    },(error:any)=>{
      console.log(error)
    })
  }
  CalCulaterTotalAmount(){
    this.commissionRecordsList.forEach((insuranceAccount:any)=>{{
      
      this.totalAmount+=insuranceAccount.commissionAmount
    }})
  }

}
