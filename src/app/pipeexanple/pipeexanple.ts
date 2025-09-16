import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeCasePipePipe } from '../change-case-pipe-pipe';
import { SimpleNgContentExample } from '../simple-ng-content-example/simple-ng-content-example';

@Component({
  selector: 'app-pipeexanple',
  imports:
   [UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    JsonPipe,
    CurrencyPipe,
  DatePipe,
SlicePipe,
PercentPipe,
ChangeCasePipePipe,
SimpleNgContentExample
],
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

price:number=1.72;
currentDate:Date=new Date();
fruits:string[]=['Apple','Orange','banana','mango'];
}
