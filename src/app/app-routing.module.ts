import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AddCityComponent } from './admin/add-city/add-city.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddInsurancePlanComponent } from './admin/add-insurance-plan/add-insurance-plan.component';
import { AddInsuranceSchemeComponent } from './admin/add-insurance-scheme/add-insurance-scheme.component';
import { AddInsuranceComponent } from './admin/add-insurance/add-insurance.component';
import { AddStateComponent } from './admin/add-state/add-state.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { InsuranceSettingComponent } from './admin/insurance-setting/insurance-setting.component';
import { TaxSettingComponent } from './admin/tax-setting/tax-setting.component';
import { ViewCityComponent } from './admin/view-city/view-city.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';
import { ViewInsrunaceComponent } from './admin/view-insrunace/view-insrunace.component';
import { ViewInsurancePlanComponent } from './admin/view-insurance-plan/view-insurance-plan.component';
import { ViewInsuranceSchemeComponent } from './admin/view-insurance-scheme/view-insurance-scheme.component';
import { ViewStateComponent } from './admin/view-state/view-state.component';
import { LandingComponent } from './home/landing/landing.component';
import { LoginComponent } from './home/login/login.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RegisterComponent } from './home/register/register.component';
import { ArogyaShieldComponent } from './policies/arogya-shield/arogya-shield.component';
import { ProtectionComponent } from './policies/protection/protection.component';
import { HelloComponent } from './employee/hello/hello.component';
import { EmpDashboardComponent } from './employee/emp-dashboard/emp-dashboard.component';
import { ViewCommisionComponent } from './admin/view-commision/view-commision.component';
import { CommisionWithdrwalComponent } from './admin/commision-withdrwal/commision-withdrwal.component';
import { ViewAgentComponent } from './admin/view-agent/view-agent.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { CommisionClaimComponent } from './admin/commision-claim/commision-claim.component';
import { InsuranceAccountComponent } from './admin/insurance-account/insurance-account.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ViewPolicyPaymentComponent } from './admin/view-policy-payment/view-policy-payment.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { MarketingComponent } from './agent/marketing/marketing.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { AgentViewCustomersComponent } from './agent/agent-view-customers/agent-view-customers.component';
import { AgentInsuranceAccountComponent } from './agent/agent-insurance-account/agent-insurance-account.component';
import { AgentPolicyPaymentComponent } from './agent/agent-policy-payment/agent-policy-payment.component';
import { EditCityComponent } from './admin/edit-city/edit-city.component';
import { EditStateComponent } from './admin/edit-state/edit-state.component';
import { EditAgentComponent } from './admin/edit-agent/edit-agent.component';
import { EditEmployeeComponent } from './admin/edit-employee/edit-employee.component';
import { AddCustomerComponent } from './agent/add-customer/add-customer.component';
import { CustDashboardComponent } from './customer/cust-dashboard/cust-dashboard.component';
import { CustProfileComponent } from './customer/cust-profile/cust-profile.component';
import { CustDocumentsComponent } from './customer/cust-documents/cust-documents.component';
import { CustChangePasswordComponent } from './customer/cust-change-password/cust-change-password.component';
import { CustInsuranceAccountComponent } from './customer/cust-insurance-account/cust-insurance-account.component';
import { BuyInsuranceComponent } from './customer/buy-insurance/buy-insurance.component';
import { PolicyPaymentComponent } from './customer/policy-payment/policy-payment.component';
import { PaymentReceiptComponent } from './customer/payment-receipt/payment-receipt.component';
import { AgentViewCommisionComponent } from './agent/agent-view-commision/agent-view-commision.component';
import { AgentCommisionWithdrawlComponent } from './agent/agent-commision-withdrawl/agent-commision-withdrawl.component';
import { AgentWithdrawAmountComponent } from './agent/agent-withdraw-amount/agent-withdraw-amount.component';
import { ServicesComponent } from './home/services/services.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { InsuranceAccountDetailsComponent } from './customer/insurance-account-details/insurance-account-details.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { EditInsuranceTypeComponent } from './admin/edit-insurance-type/edit-insurance-type.component';
import { EditInsurancePlanComponent } from './admin/edit-insurance-plan/edit-insurance-plan.component';
import { EditInsuranceSchemeComponent } from './admin/edit-insurance-scheme/edit-insurance-scheme.component';
import { EditEmployeeProfileComponent } from './employee/edit-employee-profile/edit-employee-profile.component';
import { ViewFeedbackComponent } from './customer/view-feedback/view-feedback.component';
import { AskQueryComponent } from './customer/ask-query/ask-query.component';

import { EditAgentProfileComponent } from './agent/edit-agent-profile/edit-agent-profile.component';
import { EditCustomerComponent } from './agent/edit-customer/edit-customer.component';

import { AdminRollGuardGuard } from './shared/admin-roll-guard.guard';
import { AdminInsuranceAccountDetailsComponent } from './admin/admin-insurance-account-details/admin-insurance-account-details.component';
import { CustomerRollGuardGuard } from './shared/customer-roll-guard.guard';
import { AgentRollGuardGuard } from './shared/agent-roll-guard.guard';
import { EmployeeRollGuardGuard } from './shared/employee-roll-guard.guard';
import { AgentViewDocumentsComponent } from './agent/agent-view-documents/agent-view-documents.component';
import { AdminViewDocumentsComponent } from './admin/admin-view-documents/admin-view-documents.component';
import { AccountBlockComponent } from './customer/account-block/account-block.component';
import { AddDocumentComponent } from './customer/add-document/add-document.component';
import { AgenttransactionsComponent } from './agent/agenttransactions/agenttransactions.component';
import { CustomerClaimPoliciesComponent } from './customer/customer-claim-policies/customer-claim-policies.component';
import { ClaimPoliciesComponent } from './admin/claim-policies/claim-policies.component';
import { PolicyClaimRequestsComponent } from './admin/policy-claim-requests/policy-claim-requests.component';
import { PaymentSuccessComponent } from './customer/payment-success/payment-success.component';
import { PaymentFailureComponent } from './customer/payment-failure/payment-failure.component';

const routes: Routes = [{ path: 'navbar', component: NavbarComponent },
                      { path: '', component: LandingComponent },
                      { path: 'login', component: LoginComponent },
                      { path: 'register', component: RegisterComponent },
                      { path: 'protection', component: ProtectionComponent },
                      { path: 'arogyashield', component: ArogyaShieldComponent },
                      { path: 'dashboard', component: DashboardComponent,canActivate:[AdminRollGuardGuard] },
                      { path: 'viewfeedback', component: FeedbackComponent },
                      { path: 'addinsurance', component: AddInsuranceComponent },
                      { path: 'viewinsurance', component: ViewInsrunaceComponent },
                      { path: 'addinsurancescheme', component: AddInsuranceSchemeComponent },
                      {path:'viewinsurancescheme',component:ViewInsuranceSchemeComponent},
                      {path:'addinsuranceplan',component:AddInsurancePlanComponent},
                      {path:'viewinsuranceplan',component:ViewInsurancePlanComponent},
                      {path:'tax',component:TaxSettingComponent},
                      {path:'insurancesetting',component:InsuranceSettingComponent},
                      {path:'addcity',component:AddCityComponent},
                      {path:'viewcity',component:ViewCityComponent},
                      {path:'addstate',component:AddStateComponent},
                      {path:'viewstate',component:ViewStateComponent},
                      {path:'addemployee',component:AddEmployeeComponent},
                      {path:'viewemployee',component:ViewEmployeeComponent,canActivate:[AdminRollGuardGuard]},
                      {path:'viewcommison',component:ViewCommisionComponent},
                      {path:'commisonwithdraw',component:CommisionWithdrwalComponent},
                      {path:'viewagent',component:ViewAgentComponent,canActivate:[AdminRollGuardGuard]},
                      {path:'addagent',component:AddAgentComponent},
                      {path:'hello',component:HelloComponent},
                      {path:'empdashboard',component:EmpDashboardComponent,canActivate:[EmployeeRollGuardGuard]},
                      {path:'changepassword',component:ChangePasswordComponent},
                      {path:'commisionclaim',component:CommisionClaimComponent},
                      {path:'insuranceaccount',component:InsuranceAccountComponent},
                      {path:'viewcustomers',component:ViewCustomersComponent,canActivate:[AdminRollGuardGuard]},
                      {path:'adminprofile',component:ProfileComponent},
                      {path:'viewpolicypayment',component:ViewPolicyPaymentComponent},
                      {path:'agentprofile',component:AgentProfileComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'marketing',component:MarketingComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'agentdashboard',component:AgentDashboardComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'agentviewcustomer',component:AgentViewCustomersComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'agentinsuranceaccount',component:AgentInsuranceAccountComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'agentpolicypayment',component:AgentPolicyPaymentComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'agentcommisionclaim',component:AgentPolicyPaymentComponent},
                      {path:'editcity',component:EditCityComponent},
                      {path:'editstate',component:EditStateComponent},
                      {path:'editagent',component:EditAgentComponent},
                      {path:'editemployee',component:EditEmployeeComponent},
                      {path:'addcustomer',component:AddCustomerComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'customerdashboard',component:CustDashboardComponent,canActivate:[CustomerRollGuardGuard]},
                      {path:'customerprofile',component:CustProfileComponent,canActivate:[CustomerRollGuardGuard]},
                      {path:'customerdocuments',component:CustDocumentsComponent},
                      {path:'customerchangepassword',component:CustChangePasswordComponent},
                      {path:'customeraccount',component:CustInsuranceAccountComponent,canActivate:[CustomerRollGuardGuard]},
                      {path:'buyinsurance',component:BuyInsuranceComponent},
                      {path:'policypayment',component:PolicyPaymentComponent},
                      {path:'paymentreceipt',component:PaymentReceiptComponent},
                      {path:'agentcommision',component:AgentViewCommisionComponent},
                      {path:'commisionwithdrawl',component:AgentCommisionWithdrawlComponent,canActivate:[AgentRollGuardGuard]},
                      
                      {path:'agentwithdraw',component:AgentWithdrawAmountComponent,canActivate:[AgentRollGuardGuard]},
                      {path:'services',component:ServicesComponent},
                      {path:'contactus',component:ContactPageComponent},
                      {path:'aboutus',component:AboutusComponent},
                      {path:'editprofile',component:EditProfileComponent,canActivate:[CustomerRollGuardGuard]},
                      {path:'inuranceaccountdetails',component:InsuranceAccountDetailsComponent},
                      {path:'editinsuranetype',component:EditInsuranceTypeComponent},
                      {path:'editinsuraneplan',component:EditInsurancePlanComponent},
                      {path:'editinsuranescheme',component:EditInsuranceSchemeComponent},
                      {path:'editemployeeprofile',component:EditEmployeeProfileComponent},
                      
                      {path:'cutsomerviewfeedback',component:ViewFeedbackComponent},
                      {path:'askquery',component:AskQueryComponent},
                      {path:'editcustomer',component:EditCustomerComponent},
                      {path:'admininsurancedetails',component:AdminInsuranceAccountDetailsComponent},
                      {path:'cutsomerviewfeedback',component:ViewFeedbackComponent,canActivate:[CustomerRollGuardGuard]},
                      {path:'askquery',component:AskQueryComponent,canActivate:[CustomerRollGuardGuard]},
                      {path:'agentviewdocuments',component:AgentViewDocumentsComponent},
                      {path:'adminviewdocuments',component:AdminViewDocumentsComponent},
                      {path:'unauthorized',component: AccountBlockComponent},
                      {path:'editagentprofile',component:EditAgentProfileComponent},
                      {path:'adddocument',component:AddDocumentComponent},
                      {path:'agenttransactions',component:AgenttransactionsComponent},
                      {path:'customerclaimpolicy',component:CustomerClaimPoliciesComponent},
                      {path:'claimpolicies',component:ClaimPoliciesComponent},
                      {path:'policyclaimrequests',component:PolicyClaimRequestsComponent},
                      {path:'paymentsuccess',component:PaymentSuccessComponent},
                      {path:'paymentfailure',component:PaymentFailureComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
