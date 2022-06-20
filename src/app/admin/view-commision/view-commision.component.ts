import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-commision',
  templateUrl: './view-commision.component.html',
  styleUrls: ['./view-commision.component.css']
})
export class ViewCommisionComponent implements OnInit {

  totalAmount:number=0
  commissionsList:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetAllCommissionRecords().subscribe((data:any)=>{
      console.log(data)
      this.commissionsList=data.$values
      this.commissionsList.forEach((insuranceAccount:any)=>{{
      
        this.totalAmount+=insuranceAccount.commissionAmount
      }})
    })
  }

}
