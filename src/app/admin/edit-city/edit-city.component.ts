import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  city=new FormGroup({
    state:new FormControl('',Validators.required),
    cityName:new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
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
