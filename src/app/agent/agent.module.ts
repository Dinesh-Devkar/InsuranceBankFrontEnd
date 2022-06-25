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
import { AgentCommisionWithdrawlComponent } from './agent-commision-withdrawl/agent-commision-withdrawl.component';
import { AgentViewCommisionComponent } from './agent-view-commision/agent-view-commision.component';
import { AgentWithdrawAmountComponent } from './agent-withdraw-amount/agent-withdraw-amount.component';
import { EditAgentProfileComponent } from './edit-agent-profile/edit-agent-profile.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AgentViewDocumentsComponent } from './agent-view-documents/agent-view-documents.component';
import { AgenttransactionsComponent } from './agenttransactions/agenttransactions.component';



@NgModule({
  declarations: [
    AgentDashboardComponent,
    AgentProfileComponent,
    MarketingComponent,
    AgentViewCustomersComponent,
    AgentInsuranceAccountComponent,
    AgentPolicyPaymentComponent,
    AgentCommisionClaimComponent,
    AgentDashboardComponent,
    AgentCommisionWithdrawlComponent,
    AgentViewCommisionComponent,
    AgentWithdrawAmountComponent,
    EditAgentProfileComponent,
    EditCustomerComponent,
    AgentViewDocumentsComponent,
    AgenttransactionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class AgentModule { }
