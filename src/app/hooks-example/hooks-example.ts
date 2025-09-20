import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HooksChild } from '../hooks-child/hooks-child';

@Component({
  selector: 'app-hooks-example',
  imports: [HooksChild],
  templateUrl: './hooks-example.html',
  styleUrl: './hooks-example.css'
})
export class HooksExample implements

OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
//OnChanges

{

 age=0;
a=0;
constructor()
{
   this.age=18;
  console.log('Constructor Called:'+this.age);
}
 
ngOnInit(): void {
  this.age=18;
    console.log('Parent ngOnInit Called:');
   }
    
  ngDoCheck(): void {
    console.log('ngDoCheck Called:'+this.age);
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges Called:'+this.age);
  // }
  

 ngAfterContentInit(): void {
        console.log('ngAfterContentInit Called:'+this.age);

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called:'+this.age);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called:'+this.age);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called:'+this.age);
  }
  
 
ngOnDestroy(): void {
    console.log('ngOnDestroy Called:'+this.age);
  }

  updateAge()
  {
    this.age=21;
  }


}


// life cycle of hooks


// 1)constructor is called first and used for performing dependency injection operation

// or anything you want to execute before any hooks life cycle you can use contructor

// 2)ngOnInit

// it is going called after your constructor and best usage is to initialize values

// 3)ngOnchanges

// called whenever your @Input() find changes
// it have parameter to check your current,previous,firstchange
// need to be define inside Child Component


// 4)ngDestory

//  called whenever you navigate to another component or leave the current component
// 5)ngDocheck 

// called whenever any change it detect inside component like variable,property ,arrays
// object 

//ngAfterContentInit is called whenever you are going load data or content
//it is also called when we are going to pass data to ng-content directive
//this is used to called at the time of initialization of content


///ngAfterContnetChecked called after data or content is called ie to checked data

//ngAfterViewInit is Called to initialize domelements
//ngAfterViewChecked called when fully view is loaded


