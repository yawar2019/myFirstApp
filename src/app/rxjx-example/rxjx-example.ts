import { Component } from '@angular/core';
import { catchError, concatMap, delay, filter, interval, map, mergeMap, Observable, of, take, throwError } from 'rxjs';

@Component({
  selector: 'app-rxjx-example',
  imports: [],
  templateUrl: './rxjx-example.html',
  styleUrl: './rxjx-example.css'
})
export class RxjxExample {

  constructor()
{
//this.fetchData().then(data=>{console.log('success'+data)}).catch(error=>console.error('failed:'+error));
//this.ObservableExample();
//this.ObservableExample_Error();
//this.ObServableOperator1();
//this.ObServableOperator2();
//this.OperatorExampleConcatMap();
this.OperatorExampleMergeMap();
}
fetchData()
{
  let age=16;
  return new Promise((resolve,reject)=>{

    //logic to fetch data from server
    if(age===18)
      {
      setTimeout(()=>{
        resolve('data is successfully return:'+age);
      },12000)
      }
    else
      {
   reject('Error Occured because age is less then 18 '+age);
      }
  })
}

ObservableExample()
{
  let Obser=new Observable((sub)=>{
    sub.next('my first value of Observable');
    sub.next('my second value of Observable');
    
  })
  Obser.subscribe(x=>console.log(x));
}


ObservableExample_Error()
{
  let Obser=new Observable((sub)=>{
    try{
    sub.next('my first value of Observable');
    sub.next('my second value of Observable');
    sub.complete();  
  }
    catch(e)
    {
sub.error();
    }
  })
  Obser.pipe(
    catchError(err =>
      {
      console.log('error occored'+err);
      return throwError(()=>err);
}
)
).subscribe(x=>console.log(x));
}

ObServableOperator1()
{
//const numbers=of(1,2,3,4,5);
const names=of('1','2','3','4','5');
const result=names.pipe(
 //map(x=>x*2),
//filter(num=>num>=10)
take(3)
)
result.subscribe(x=>console.log(x));
}


ObServableOperator2()
{
 const intervalObservable=interval(5000).pipe(take(5))
intervalObservable.subscribe({
  next:value=>console.log('Emitted Value',value),
  error:err=>console.log('Emitted Value',err),
  complete:()=>console.log('Observable Complete')
})
}

OperatorExampleConcatMap()
{
  const num=of(1,2,3);
const result=num.pipe(

  concatMap(value=>of(`${value}`).pipe(delay(2000)))
)
result.subscribe(x=>console.log(x));
}

OperatorExampleMergeMap()
{
  const num=of(1,2,3);
const result=num.pipe(

  mergeMap(value=>interval(500).pipe(take(2)))
)
result.subscribe(x=>console.log(x));
}


}



