import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
FirstName="Raj shekhar";
@Input() parentdata:string='';
@Output() childata=new EventEmitter<string>();

ChildToParent()
{
  this.childata.emit('Good Morning');
}

}
