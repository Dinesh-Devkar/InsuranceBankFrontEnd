import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { CustProfileComponent } from './cust-profile/cust-profile.component';
import { CustDocumentsComponent } from './cust-documents/cust-documents.component';
import { CustChangePasswordComponent } from './cust-change-password/cust-change-password.component';
import { CustInsuranceAccountComponent } from './cust-insurance-account/cust-insurance-account.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { PolicyPaymentComponent } from './policy-payment/policy-payment.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';



@NgModule({
  declarations: [
    CustDashboardComponent,
    CustProfileComponent,
    CustDocumentsComponent,
    CustChangePasswordComponent,
    CustInsuranceAccountComponent,
    BuyInsuranceComponent,
    PolicyPaymentComponent,
    PaymentReceiptComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class CustomerModule { }
