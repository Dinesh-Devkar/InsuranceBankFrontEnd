import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ProtectionComponent } from './protection/protection.component';
// import { ArogyaShieldComponent } from './arogya-shield/arogya-shield.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    // ProtectionComponent,
    // ArogyaShieldComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class PoliciesModule { }
