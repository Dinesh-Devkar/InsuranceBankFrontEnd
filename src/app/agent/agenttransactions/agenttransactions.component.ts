import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';

@Component({
  selector: 'app-agenttransactions',
  templateUrl: './agenttransactions.component.html',
  styleUrls: ['./agenttransactions.component.css']
})
export class AgenttransactionsComponent implements OnInit {

  transactions:any
  constructor(private agentService:AgentServiceService,private alertService:AlertsService,private router:Router) { }

  GoToDashboard(){
    if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
      sessionStorage.removeItem('agentId')
      this.router.navigate(['/dashboard'])
      return
    }
    if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
      sessionStorage.removeItem('agentId')
      this.router.navigate(['/empdashboard'])
      return
    }
    this.router.navigate(['/agentdashboard'])
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('loggedInuserRoll')=="Agent"){
      this.agentService.GetTransactions(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
        console.log(data)
        this.transactions=data.$values
      },(error:any)=>{
        alert(error.error.message)
      })
      return
    }
    if(sessionStorage.getItem('loggedInuserRoll')=="Admin" || sessionStorage.getItem('loggedInuserRoll')=="Employee"){
      this.agentService.GetTransactions(sessionStorage.getItem('agentId'))
      .subscribe((data:any)=>{
        console.log(data)
        this.transactions=data.$values
      },(error:any)=>{
        this.alertService.Failed(error.error.message)
      })
    }
    
  }

}
