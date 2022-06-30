import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-policy-payment',
  templateUrl: './policy-payment.component.html',
  styleUrls: ['./policy-payment.component.css']
})
export class PolicyPaymentComponent implements OnInit {

  payment=new FormGroup({
    customerId:new FormControl('',Validators.required),
    customerName:new FormControl('',Validators.required),
    insuranceAccountNumber:new FormControl('',Validators.required),
    insuranceScheme:new FormControl('',Validators.required),
    installmentNumber: new FormControl('',Validators.required),
    installmentAmount:new FormControl('',Validators.required),
    installmentDate:new FormControl('',Validators.required),
    paidDate:new FormControl('',Validators.required)
  })
  constructor(private customerService:CustomerServiceService,private router:Router,private alertService:AlertsService) { }

  ngOnInit(): void {
   console.log()
   let pmt= JSON.parse(sessionStorage.getItem('pmt') || '{}')
   this.payment.setValue({
    customerId:pmt.customerId,
    customerName:pmt.customerName,
    insuranceAccountNumber:pmt.accountNumber,
    insuranceScheme:pmt.insuranceScheme,
    installmentNumber:pmt.installmentNumber,
    installmentAmount:pmt.installmentAmount,
    installmentDate:moment(pmt.installmentDate),
    paidDate:moment(),
   })
  }

  DoPayment(){
    this.customerService.DoPayment(sessionStorage.getItem('loggedInUser'),this.payment.value).subscribe((data:any)=>{
      //alert(data.message)
      this.alertService.Success(data.message)
      sessionStorage.removeItem('pmt')
      this.router.navigate(['/customerdashboard'])
    },(error:any)=>{
      //alert(error.message)
      this.alertService.Failed(error.message)
      //console.log(error)
    })
  }
  get CustomerId(){
    return this.payment.get('customerId')
  }
  get InsuranceAccountNumber(){
    return this.payment.get('insuranceAccountNumber')
  }
  get InsuranceScheme(){
    return this.payment.get('insuranceScheme')
  }
  get InstallmentNumber(){
    return this.payment.get('installmentNumber')
  }
  get InstallmentAmount(){
    return this.payment.get('installmentAmount')
  }
  get InstallmentDate(){
    return this.payment.get('installmentDate')
  }
  get PaidDate(){
    return this.payment.get('paidDate')
  }

}
