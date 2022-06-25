import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

@Component({
  selector: 'app-agenttransactions',
  templateUrl: './agenttransactions.component.html',
  styleUrls: ['./agenttransactions.component.css']
})
export class AgenttransactionsComponent implements OnInit {

  transactions:any
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetTransactions(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
      console.log(data)
      this.transactions=data.$values
    },(error:any)=>{
      alert(error.error.message)
    })
  }

}
