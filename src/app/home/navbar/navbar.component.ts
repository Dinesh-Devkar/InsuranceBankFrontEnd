import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedInUserName:string|null=sessionStorage.getItem('loggedInUserName')
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.authService.RefreshRequired.subscribe((data:any)=>{
      
      setTimeout(()=>{
       this.loggedInUserName=sessionStorage.getItem('loggedInUserName')
      },100)

      this.authService.GetSelectedLoggedInUserName().subscribe((data:any)=>{
        this.loggedInUserName=sessionStorage.getItem('loggedInUserName')
      })
      
      
  })
  }

}
