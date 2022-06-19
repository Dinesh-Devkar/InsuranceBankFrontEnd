import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agent-withdraw-amount',
  templateUrl: './agent-withdraw-amount.component.html',
  styleUrls: ['./agent-withdraw-amount.component.css']
})
export class AgentWithdrawAmountComponent implements OnInit {

  withdraw=new FormGroup({
    amount:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get Withdraw(){
    return this.withdraw.get('amount')
  }
}
