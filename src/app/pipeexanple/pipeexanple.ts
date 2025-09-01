import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeexanple',
  imports:
   [UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    JsonPipe,
    CurrencyPipe,
  DatePipe],
  templateUrl: './pipeexanple.html',
  styleUrl: './pipeexanple.css'
})
export class Pipeexanple {
firstname:string='raja';
middlename:string='SINGH';
lastname='mAhI';

empObj={

  empname:'Sunil',
  age:26,
  mobileNo:'9929292'
}

price:number=759.00;
currentDate:Date=new Date();

}
