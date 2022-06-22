import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  queriesList:any
  adminReply:string=''
  constructor(private dataService:DataServiceService) { }

  SolveQuery(query:any,reply:string){
    query.reply=reply
    this.adminReply=''
    this.dataService.SolveQuery(query).subscribe((data:any)=>{
      alert(data.message)
      this.GetAllQueries()
    },(error:any)=>{
      alert(error.message)
      console.log(error)
    })
  }
  ngOnInit(): void {
    this.GetAllQueries()
  }
  GetAllQueries(){
    this.dataService.GetAllQueries().subscribe((data:any)=>{
      this.queriesList=data.$values
      console.log(this.queriesList)
    })
  }

}
