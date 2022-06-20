import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-city',
  templateUrl: './view-city.component.html',
  styleUrls: ['./view-city.component.css']
})
export class ViewCityComponent implements OnInit {

  cityList:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  GoToCityEditPage(city:any){
      this.dataService.SetSelectedCity(city);
      this.router.navigate(['/editcity'])
  }
  ngOnInit(): void {
    this.dataService.GetAllCities().subscribe((data:any)=>{
      this.cityList=data.$values
      console.log(data)
    },(error:any)=>{
      alert(error.error.message)
    })
  }

}
