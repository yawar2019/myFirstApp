import { Component } from '@angular/core';
import { counterSignal } from '../signalcounter/signalcounter';
@Component({
  selector: 'app-signal-get-counter',
  imports: [],
  template: `<p>{{counter()}}</p>
   <button (click)="Increment()">+</button>`,
  styleUrl: './signal-get-counter.css'
})
export class SignalGetCounter {
counter=counterSignal;
Increment()
{
  this.counter.update(value=>value+1);
}
}
