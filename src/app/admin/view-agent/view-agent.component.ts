import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  agentsList:any
  ab=[1,2,3,4,5]
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.ab=[40,50,60,40,50]
    this.agentService.GetAllAgents().subscribe((data:any)=>{
      console.log(data)
      console.log(data.$values)
      let i=data.$values;
      this.agentsList=data.$values;
      for(var item in i){
        console.log(item)
      }
      console.log(i[0])
    })
  }

}
