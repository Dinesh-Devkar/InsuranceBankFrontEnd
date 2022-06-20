import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {

  statesList:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  UpdateState(state:any){
    this.dataService.SetSelectedState(state)
    this.router.navigate(['/editstate'])
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
