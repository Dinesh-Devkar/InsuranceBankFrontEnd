import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  city=new FormGroup({
    state:new FormControl('',Validators.required),
    cityname:new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  get State(){
    return this.city.get('state')
  }
  get CityName(){
    return this.city.get('cityname')
  }
  get Status(){
    return this.city.get('status')
  }
}
