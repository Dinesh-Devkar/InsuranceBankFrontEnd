import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { AlertsService } from 'src/app/services/alert/alerts.service';

@Component({
  selector: 'app-agent-withdraw-amount',
  templateUrl: './agent-withdraw-amount.component.html',
  styleUrls: ['./agent-withdraw-amount.component.css']
})
export class AgentWithdrawAmountComponent implements OnInit {

  balance:number=0
  withdraw=new FormGroup({
    agentId:new FormControl(sessionStorage.getItem('loggedInUser')),
    amount:new FormControl('',Validators.required)
  })
  constructor(private agentService:AgentServiceService,private alertService:AlertsService,private router:Router) { }

  ngOnInit(): void {
    this.agentService.GetBalance(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
      this.balance=data
    },(error:any)=>{
      //alert(error.error.message)
      this.alertService.Failed(error.error.message)
      console.log(error)
    })
  }

  WithdrawAmount(){
    if(this.Amount?.value<0)
    {
      //alert("Invalid Amount")
      this.alertService.Failed("Invalid Amount");
    }
    else if(this.Amount?.value<500){
      //alert("Enter Amount Above 500rs")
      this.alertService.Failed("Enter Amount Above 500rs");
    }
    else if(this.Amount?.value>this.balance){
      //alert("Insufficient Balance")
      this.alertService.Failed("Insufficient Balance");
    }
    else{
     
      
      this.agentService.DoTransaction(sessionStorage.getItem('loggedInUser'),this.withdraw.value).subscribe((data:any)=>{
        //alert(data.message)
        this.alertService.Success(data.message)
        this.router.navigate(['/agentdashboard'])
      },(error:any)=>{
        this.alertService.Failed(error.error.message)
        console.log(error)
      })
    }
    
  }
  get Amount(){
    return this.withdraw.get('amount')?.value
  }
}
