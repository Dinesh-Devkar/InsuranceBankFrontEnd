import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-employee-profile',
  templateUrl: './edit-employee-profile.component.html',
  styleUrls: ['./edit-employee-profile.component.css']
})
export class EditEmployeeProfileComponent implements OnInit {

  adminForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    loginId:new FormControl(''),
    userRoll:new FormControl(''),
    userStatus:new FormControl('')
  
  })
  constructor() { }

  ngOnInit(): void {
  }

}
