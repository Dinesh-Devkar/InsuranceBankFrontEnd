import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-payment',
  templateUrl: './policy-payment.component.html',
  styleUrls: ['./policy-payment.component.css']
})
export class PolicyPaymentComponent implements OnInit {

  payment=new FormGroup({
    paymenttype:new FormControl('',Validators.required),
    cardholder:new FormControl('',Validators.required),
    cardnumber:new FormControl('',Validators.required),
    cvvnumber: new FormControl('',Validators.required),
    expirydate:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get PaymentType(){
    return this.payment.get('paymenttype')
  }
  get CardHolder(){
    return this.payment.get('cardholder')
  }
  get CardNumber(){
    return this.payment.get('cardnumber')
  }
  get CvvNumber(){
    return this.payment.get('cvvnumber')
  }
  get ExpiryDate(){
    return this.payment.get('expirydate')
  }

}
