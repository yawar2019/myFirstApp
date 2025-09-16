import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  imports: [],
  templateUrl: './hooks-child.html',
  styleUrl: './hooks-child.css'
})
export class HooksChild {
  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const inputName in changes) {
  //     const inputValues = changes[inputName];
  //     console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
  //     console.log(`Current ${inputName} == ${inputValues.currentValue}`);
  //     console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
  //   }
//  }
@Input() parentData=0;
}
