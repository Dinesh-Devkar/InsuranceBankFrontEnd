import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.css']
})
export class EditStateComponent implements OnInit {

  state=new FormGroup({
    stateName:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService,private router:Router,private alertService:AlertsService) { }

  UpdateState(){
    this.dataService.UpdateState(this.state.value).subscribe((data:any)=>{
      this.alertService.Success(data.message)
      if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
        this.router.navigate(['/dashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
     
    },(error:any)=>{
      this.alertService.Failed(error.error.message)
     
    })
  }
  ngOnInit(): void {
    this.StateName?.setValue(this.dataService.GetSelectedState())
  }
  get StateName(){
    return this.state.get('stateName');
  }
  get Status(){
    return this.state.get('status');
  }
}
