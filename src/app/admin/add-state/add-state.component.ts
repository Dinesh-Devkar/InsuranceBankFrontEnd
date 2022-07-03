import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  state=new FormGroup({
    stateName:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService,private alert:AlertsService,private router:Router) { }

  AddState(){
    this.dataService.AddState(this.state.value).subscribe((data:any)=>{
      console.log(data)
      this.alert.Success(data.message)
      this.state.reset()
      // this.alert.Add()
      this.router.navigate(['/dashboard'])
    },(error:any)=>{
     // this.alert.Failed()
      this.alert.Failed(error.error.message)
      console.log(error)
    }) 

  }
  ngOnInit(): void {
  }

  get StateName(){
    return this.state.get('stateName');
  }
  get Status(){
    return this.state.get('status');
  }
}
