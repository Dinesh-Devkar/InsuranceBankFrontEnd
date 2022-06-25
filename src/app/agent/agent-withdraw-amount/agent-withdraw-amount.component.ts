import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

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
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetBalance(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
      this.balance=data
    },(error:any)=>{
      alert(error.error.message)
      console.log(error)
    })
  }

  WithdrawAmount(){
    if(this.Amount?.value<0)
    {
      alert("Invalid Amount")
    }
    else if(this.Amount?.value<500){
      alert("Enter Amount Above 500rs")
    }
    else if(this.Amount?.value>this.balance){
      alert("Insufficient Balance")
    }
    else{
      alert(this.Amount?.value)
      console.log(this.withdraw.value)
      this.agentService.DoTransaction(sessionStorage.getItem('loggedInUser'),this.withdraw.value).subscribe((data:any)=>{
        alert(data.message)
      },(error:any)=>{
        alert(error.error.message)
        console.log(error)
      })
    }
    
  }
  get Amount(){
    return this.withdraw.get('amount')
  }
}
