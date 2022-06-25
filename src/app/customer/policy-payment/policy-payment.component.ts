import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-policy-payment',
  templateUrl: './policy-payment.component.html',
  styleUrls: ['./policy-payment.component.css']
})
export class PolicyPaymentComponent implements OnInit {

  payment=new FormGroup({
    customerId:new FormControl('',Validators.required),
    insuranceAccountNumber:new FormControl('',Validators.required),
    insuranceScheme:new FormControl('',Validators.required),
    installmentNumber: new FormControl('',Validators.required),
    installmentAmount:new FormControl('',Validators.required),
    installmentDate:new FormControl('',Validators.required),
    paidDate:new FormControl('',Validators.required)
  })
  constructor(private customerService:CustomerServiceService,private router:Router) { }

  ngOnInit(): void {
   console.log()
   let pmt= JSON.parse(sessionStorage.getItem('pmt') || '{}')
   this.payment.setValue({
    customerId:pmt.customerId,
    insuranceAccountNumber:pmt.accountNumber,
    insuranceScheme:pmt.insuranceScheme,
    installmentNumber:pmt.installmentNumber,
    installmentAmount:pmt.installmentAmount,
    installmentDate:pmt.installmentDate,
    paidDate:moment()
   })
  }

  DoPayment(){
    this.customerService.DoPayment(sessionStorage.getItem('loggedInUser'),this.payment.value).subscribe((data:any)=>{
      alert(data.message)
      this.router.navigate(['/customerdashboard'])
    },(error:any)=>{
      alert(error.message)
      console.log(error)
    })
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
