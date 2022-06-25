import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  statesList:any
  city=new FormGroup({
    state:new FormControl('',Validators.required),
    cityName:new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)
  })

  constructor(private dataService:DataServiceService,private alert:AlertsService,private router:Router) { }

  AddCity(){
    this.dataService.AddCity(this.city.value).subscribe((data:any)=>{
      alert(data.message)
      this.city.reset()
      // this.alert.Add("Aniket Donode");
      this.alert.delete("Aniket Donode")
      this.router.navigate(['/dashboard'])
    },(error:any)=>{
      //this.alert.Failed();
      alert(error.error.message)
    })
  }
  ngOnInit(): void {
    this.dataService.GetAllStates().subscribe((data:any)=>{
      this.statesList=data.$values
      console.log(data)
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
