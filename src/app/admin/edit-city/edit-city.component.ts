import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  statesList:any
  city=new FormGroup({
    state:new FormControl('',Validators.required),
    cityName:new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService,private router:Router,private alertService:AlertsService) { }

  UpdateCity(){
      this.dataService.UpdateCity(this.city.value).subscribe((data:any)=>{
        this.alertService.Success(data.message)
        this.router.navigate(['/dashboard'])
      },(error:any)=>{
        this.alertService.Failed(error.error.message)
      })
  }
  ngOnInit(): void {
    console.log(this.dataService.GetSelectedCity())
    this.CityName?.setValue(this.dataService.GetSelectedCity())
    this.dataService.GetAllStates().subscribe((data:any)=>{
      this.statesList=data.$values
    })
  }

  get State(){
    return this.city.get('state')
  }
  get CityName(){
    return this.city.get('cityName')
  }
  get Status(){
    return this.city.get('status')
  }
  
}
