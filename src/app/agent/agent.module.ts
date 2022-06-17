import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AgentViewCustomersComponent } from './agent-view-customers/agent-view-customers.component';
import { AgentInsuranceAccountComponent } from './agent-insurance-account/agent-insurance-account.component';
import { AgentPolicyPaymentComponent } from './agent-policy-payment/agent-policy-payment.component';
import { AgentCommisionClaimComponent } from './agent-commision-claim/agent-commision-claim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    AgentDashboardComponent,
    AgentProfileComponent,
    MarketingComponent,
    AgentViewCustomersComponent,
    AgentInsuranceAccountComponent,
    AgentPolicyPaymentComponent,
    AgentCommisionClaimComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class AgentModule { }
