import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { SignalGetCounter } from '../signal-get-counter/signal-get-counter';

@Component({
  selector: 'app-signalexample',
  imports: [CommonModule,SignalGetCounter],
  templateUrl: './signalexample.html',
  styleUrl: './signalexample.css'
})
export class Signalexample {
count=signal(10);//initialize a value 
todos=signal<string[]>([]);

a=signal(10);
b=signal(20);
c=computed(()=>this.a()+this.b());


addingtodo(todo:string)
{
this.todos.update(list=>[...list,todo]);
}

clear()
{
  this.todos.set([]);
}




Increment()
{
  //this.count=this.count+1 //wrong
this.count.update(c=>c+1);//right  based on current value you want to update count
                            //go for update method
}

Decrement()
{
this.count.update(c=>c-1);
}
}



//signal is a wrapper around a value that lets angular automatically track the values
//singnal can be called as special variable which update UI when it changes