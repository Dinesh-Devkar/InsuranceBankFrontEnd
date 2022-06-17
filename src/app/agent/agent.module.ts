import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AgentViewCustomersComponent } from './agent-view-customers/agent-view-customers.component';
import { AgentInsuranceAccountComponent } from './agent-insurance-account/agent-insurance-account.component';
import { AgentPolicyPaymentComponent } from './agent-policy-payment/agent-policy-payment.component';
import { AgentCommisionClaimComponent } from './agent-commision-claim/agent-commision-claim.component';



@NgModule({
  declarations: [
    AgentDashboardComponent,
    AgentProfileComponent,
    MarketingComponent,
    AgentViewCustomersComponent,
    AgentInsuranceAccountComponent,
    AgentPolicyPaymentComponent,
    AgentCommisionClaimComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgentModule { }