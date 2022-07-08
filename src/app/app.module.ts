import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { ProtectionComponent } from './policies/protection/protection.component';
import { ArogyaShieldComponent } from './policies/arogya-shield/arogya-shield.component';
import { FooterComponent } from './home/footer/footer.component';
import { DefaultNavbarComponent } from './home/default-navbar/default-navbar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddInsuranceComponent } from './admin/add-insurance/add-insurance.component';
import { AddCityComponent } from './admin/add-city/add-city.component';
import { AddStateComponent } from './admin/add-state/add-state.component';
import { AddInsuranceSchemeComponent } from './admin/add-insurance-scheme/add-insurance-scheme.component';
import { AddInsurancePlanComponent } from './admin/add-insurance-plan/add-insurance-plan.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
// import { EmpDashboardComponent } from './employee/emp-dashboard/emp-dashboard.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AdminModule } from './admin/admin.module';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { EditCityComponent } from './admin/edit-city/edit-city.component';
import { AddCustomerComponent } from './agent/add-customer/add-customer.component';
import { CustomerModule } from './customer/customer.module';
import { AgentModule } from './agent/agent.module';
import { LandingComponent } from './home/landing/landing.component';
import { EmployeeModule } from './employee/employee.module';
import { TokenIntercepterService } from './services/token-intercepter.service';
import {FileUploadModule} from 'primeng/fileupload';
import { MembershipSuccessComponent } from './memberships/membership-success/membership-success.component';
import { MembershipFailureComponent } from './memberships/membership-failure/membership-failure.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProtectionComponent,
    ArogyaShieldComponent,
    FooterComponent,
    DefaultNavbarComponent,
    DashboardComponent,
    AddInsuranceComponent,
    AddCityComponent,      
    // EmpDashboardComponent,
    LandingComponent,
    AddCustomerComponent,
    MembershipSuccessComponent,
    MembershipFailureComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    CustomerModule,
    AgentModule,
    EmployeeModule,
    FileUploadModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenIntercepterService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
