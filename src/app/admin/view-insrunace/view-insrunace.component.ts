import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-insrunace',
  templateUrl: './view-insrunace.component.html',
  styleUrls: ['./view-insrunace.component.css']
})
export class ViewInsrunaceComponent implements OnInit {

  insuranceTypesList:any
  constructor(private adminService:AdminServiceService,private router:Router) { }

  GoToEditInsuranceTypePage(insuranceTypeId:any){
    sessionStorage.setItem('insuranceTypeId',insuranceTypeId)
    this.router.navigate(['/editinsuranetype'])
  }
  ngOnInit(): void {
    this.adminService.GetAllInsuranceTypesForAdmin(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
      console.log(data)
      this.insuranceTypesList=data.$values
      console.log(this.insuranceTypesList)
    })
  }

}
