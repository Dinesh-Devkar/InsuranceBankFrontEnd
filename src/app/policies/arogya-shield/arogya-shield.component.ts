import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arogya-shield',
  templateUrl: './arogya-shield.component.html',
  styleUrls: ['./arogya-shield.component.css']
})
export class ArogyaShieldComponent implements OnInit {	
 

  intrestRate:number=7.0;
  numberOfYears:number=0;
  investmentAmount:number=0;
  months:number=0;
  installmentAmont:number=0;
  intrestAmount:number=0;
  totalAmount=0;
  isCustomerLogIn:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  allValues(){
    
  }
  fillFields(){
    this.intrestAmount= (this.investmentAmount * this.intrestRate *this.numberOfYears )/100
    this.totalAmount=this.investmentAmount+this.intrestAmount;
    this.installmentAmont=this.totalAmount / this.months;    
    
    console.log(this.intrestRate)
    console.log(this.numberOfYears)
    console.log(this.investmentAmount)
    console.log(this.months)
    console.log(this.installmentAmont)
    console.log(this.intrestAmount)
    console.log(this.totalAmount)

  }

}
