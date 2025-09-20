import { Component, OnInit, signal } from '@angular/core';
import { counterSignal } from '../signalcounter/signalcounter';
import { SignalSharedServie } from '../signal-shared-servie';

@Component({
  selector: 'app-signal-get-counter-ex2',
  imports: [],
  template: `<p>{{counter()}}</p>shared value:{{DisplayServiceValue()}}<p>
             <button (click)="UpdateSignal()">update shared signal</button>          `,

  styleUrl: './signal-get-counter-ex2.css'
})
export class SignalGetCounterEx2 implements OnInit {
counter=counterSignal;
DisplayServiceValue=signal<string>('');
constructor(private service:SignalSharedServie)
{

}
  ngOnInit(): void {
    this.DisplayServiceValue=this.service.gerMessage();
  }

 UpdateSignal()
 {
this.service.setMessage('Vishwas');
 
 }

}
