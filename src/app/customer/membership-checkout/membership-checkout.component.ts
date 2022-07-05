import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IMemberShipPlan } from 'src/app/memberships/IMembership';
import { MembershipServiceService } from 'src/app/services/membership-service.service';

@Component({
  selector: 'app-membership-checkout',
  templateUrl: './membership-checkout.component.html',
  styleUrls: ['./membership-checkout.component.css']
})
export class MembershipCheckoutComponent implements OnInit {
  $membership: Observable<IMemberShipPlan> | undefined;
  constructor(private membershipService: MembershipServiceService) {}

  ngOnInit(): void {
    this.$membership = this.membershipService.getMembership();
  }
  onSubmit(f: NgForm) {
    this.membershipService.requestMemberSession(f.value.priceId);
  }

}
