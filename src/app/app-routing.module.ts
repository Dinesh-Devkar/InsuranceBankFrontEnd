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

const routes: Routes = [{ path: 'navbar', component: NavbarComponent },
                      { path: '', component: LandingComponent },
                      { path: 'login', component: LoginComponent },
                      { path: 'register', component: RegisterComponent },
                      { path: 'protection', component: ProtectionComponent },
                      { path: 'arogyashield', component: ArogyaShieldComponent },
                      { path: 'dashboard', component: DashboardComponent },
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
                      {path:'viewemployee',component:ViewEmployeeComponent},
                      {path:'viewcommison',component:ViewCommisionComponent},
                      {path:'commisonwithdraw',component:CommisionWithdrwalComponent},
                      {path:'viewagent',component:ViewAgentComponent},
                      {path:'addagent',component:AddAgentComponent},
                      {path:'hello',component:HelloComponent},
                      {path:'empdashboard',component:EmpDashboardComponent},
                      {path:'changepassword',component:ChangePasswordComponent},
                      {path:'commisionclaim',component:CommisionClaimComponent},
                      {path:'insuranceaccount',component:InsuranceAccountComponent},
                      {path:'viewcustomers',component:ViewCustomersComponent},
                      {path:'adminprofile',component:ProfileComponent},
                      {path:'policypayment',component:ViewPolicyPaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
