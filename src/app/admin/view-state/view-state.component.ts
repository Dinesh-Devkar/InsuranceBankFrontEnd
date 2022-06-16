import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {

  statesList:any
  constructor(private dataService:DataServiceService) { }

  UpdateState(id:number){
    alert(id)
  }
  ngOnInit(): void {
    this.dataService.GetAllStates().subscribe((data:any)=>{
      console.log(data)
      this.statesList=data.$values
    },(error:any)=>{
      console.log(error.error)
    })
  }

}
