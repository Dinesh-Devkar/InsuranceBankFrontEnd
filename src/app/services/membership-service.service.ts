import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ICustomerPortal, IMemberShipPlan, ISession } from '../memberships/IMembership';
import { DataServiceService } from './data/data-service.service';
declare const Stripe: any;
@Injectable({
  providedIn: 'root'
})
export class MembershipServiceService {
  
  constructor(private http:HttpClient,private dataService:DataServiceService) { }
  getMembership(): Observable<IMemberShipPlan> {
    return of({
      id : "prod_LziOfakZ2E9zAO",
      priceId:'price_1LHixNSBgKTZYyeaIsQhdK4M',
      name:'Child Plan',
      price:'100',
      features:[
        'Hello',
        'Good',
        'Morning'
      ]
    });
  }
  
  
requestMemberSession(priceId: string): void {
    this.http
      .post<ISession>(environment.baseUrl+'api/Payment/create-checkout-session', {
        priceId: priceId,
        successUrl:environment.successUrl,
        failureUrl:environment.cancelUrl
      })
      .subscribe((session) => {
        this.redirectToCheckout(session);

      });
  }

  redirectToCheckout(session: ISession) {
    const stripe = Stripe(session.publicKey);

    stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });
  }
  redirectToCustomerPortal() {
    this.http
      .post<ICustomerPortal>(
        environment.baseUrl + 'api/Payment/customer-portal',
        { returnUrl: environment.homeUrl,customerId:sessionStorage.getItem('loggedInUser') },
        this.getHttpOptions()
      )
      .subscribe((data) => {
        window.location.href = data.url;
      });
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      }),
    };

    return httpOptions;
  }
}


