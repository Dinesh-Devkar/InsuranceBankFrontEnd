import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

@Component({
  selector: 'app-agent-view-customers',
  templateUrl: './agent-view-customers.component.html',
  styleUrls: ['./agent-view-customers.component.css']
})
export class AgentViewCustomersComponent implements OnInit {

  customersList:any
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetCustomers().subscribe((data:any)=>{
      this.customersList=data.$values
      console.log(data.$values)
    },(error:any)=>{
      alert(error.error.message)
    })
  }

}
