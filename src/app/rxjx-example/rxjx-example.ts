import { Component } from '@angular/core';
import { catchError, concatMap, delay, filter, interval, map, mergeMap, Observable, of, take, throwError,Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

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
//this.OperatorExampleMergeMap();
//this.SubscribeExample();
//this.SubjectExampl1();
//this.SubjectExample3();
//this.ReplaySubjectExample();
this.AsyncSubjectExample();
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


SubjectExampl1()
{
  //begining observable example
  // let obs=new Observable((obs)=>{obs.next(Math.random() )});

  // //subscribe1
  // obs.subscribe((data)=>console.log('Subscriber 1:'+data));

  // //subscribe2
  // obs.subscribe((data)=>console.log('Subscriber 2:'+data));
  //Ending Of Observable Example



  //Begining of Subject Example

  // const subject = new Subject();
  // subject.subscribe((data) => console.log('Subject Subscriber 1:' + data));
  // subject.subscribe((data) => console.log('Subject Subscriber 2:' + data));
  // subject.next(Math.random());

  //Ending of Subject Example


  //Begining of Subject Example Consumer

  
  // const data=ajax('https://jsonplaceholder.typicode.com/users');
  // data.subscribe((res)=>console.log('Subject Subscriber 1:',res));
  // data.subscribe((res)=>console.log('Subject Subscriber 2:',res));
  // data.subscribe((res)=>console.log('Subject Subscriber 3:',res));
 



//   const subject = new Subject();
//   const data=ajax('https://jsonplaceholder.typicode.com/users');
//   subject.subscribe((res)=>console.log('Subject Subscriber 1:',res));
//   subject.subscribe((res)=>console.log('Subject Subscriber 2:',res));
//   subject.subscribe((res)=>console.log('Subject Subscriber 3:',res));
//   data.subscribe(subject);//data is producer and subject is consumer
}


SubjectExample3()
{

  const subject = new  Subject();
  //subscribe1
  subject.subscribe((data)=>console.log('Subscriber 1:'+data));

  //subscribe2
  subject.subscribe((data)=>console.log('Subscriber 2:'+data));
  subject.next(200);
  //subscribe3
  subject.subscribe((data)=>console.log('Subscriber 3:'+data));
  subject.next(300);
}


// BehaviouralSubjectExample()
// {

//   const subject = new BehaviorSubject(100);
//   //subscribe1
//   subject.subscribe((data)=>console.log('Subscriber 1:'+data));

//   //subscribe2
//   subject.subscribe((data)=>console.log('Subscriber 2:'+data));
//   subject.next(200);
//   //subscribe3
//   subject.subscribe((data)=>console.log('Subscriber 3:'+data));
//   subject.next(300);
// }

// SubscribeExample()
// {
//   const subject = new Subject();
 
// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });
 
// subject.next(1);
// subject.next(2);

// }
// ReplaySubjectExample()
// {
//   const subject = new ReplaySubject(2);
//   subject.next(100);
//   subject.next(200);
//   subject.next(300);
//   //subscribe1
//   subject.subscribe((data) => console.log('Subscriber 1:' + data));

//   //subscribe2
//   subject.subscribe((data) => console.log('Subscriber 2:' + data));
//   subject.next(2020);
//   //subscribe3
//   subject.subscribe((data) => console.log('Subscriber 3:' + data));
//   subject.next(2030);

// } 
AsyncSubjectExample()
{
  const subject = new AsyncSubject();
  subject.next(100);
  subject.next(200);
  subject.next(300);
  //subscribe1
  subject.subscribe((data) => console.log('Subscriber 1:' + data));
  //subject.complete();
  subject.next(2020);
  //subscribe2
  subject.subscribe((data) => console.log('Subscriber 2:' + data));
  subject.subscribe((data) => console.log('Subscriber 3:' + data));
  subject.next(2030);
  subject.complete();


}
}