import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { CommonModule } from '@angular/common';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  agentsList:any
  constructor(private agentService:AgentServiceService,private dataService:DataServiceService,private router:Router) { }

  SetSelectedAgentCode(agentCode:any){
    //this.dataService.SetSelectedAgentCode(agentCode)
    sessionStorage.setItem('agentCode',agentCode)
    this.router.navigate(['/editagent'])
  }
  ngOnInit(): void {
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
