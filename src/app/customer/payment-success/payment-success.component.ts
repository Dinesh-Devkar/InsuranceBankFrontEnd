import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';
import { MembershipServiceService } from 'src/app/services/membership-service.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private membershipService:MembershipServiceService,private alertService:AlertsService,private customerService:CustomerServiceService) { }

  ngOnInit(): void {
    alert("Call done")
    console.log("Demo")
    console.log(this.membershipService.GetPurchaseInsurancePlan())
    console.log(sessionStorage.getItem('insurancePlan'))
    console.log(JSON.parse(sessionStorage.getItem('insurancePlan')|| '{}'))
    if(sessionStorage.getItem('insurancePlan')!=null){
        this.customerService.PurchaseInsurancePlan(sessionStorage.getItem('insurancePlan')).subscribe((data:any)=>{
          this.alertService.Success(data.message)
          //this.router.navigate(['/customerdashboard'])
        },(error:any)=>{
          //alert(error.error.message)
          console.log(error)
          this.alertService.Failed(error.message.message)   
        })
    }
  }

}
