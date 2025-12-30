import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { ViewChildexample2 } from '../view-childexample2/view-childexample2';

@Component({
  selector: 'app-view-child-example',
  imports: [ViewChildexample2],
  templateUrl: './view-child-example.html',
  styleUrl: './view-child-example.css'
})
export class ViewChildExample 
//implements AfterViewInit 
{
  /// start example1
//   @ViewChild('rrr') rinput!: ElementRef;

//   ngAfterViewInit(): void {
//     this.rinput.nativeElement.focus();
//   }

// ShowAlert()
// {
// alert(this.rinput.nativeElement.value);
// }
/// end example1
/// start example2
// @ViewChildren('button') buttons!: QueryList<ElementRef>;

// ngAfterViewInit(): void {
//   this.buttons.forEach((button) => {
//     button.nativeElement.style.backgroundColor = 'yellow';
//   });
// }
/// end example2
// Example3: refer viewchildexample2.ts
@ViewChild(ViewChildexample2) childComponent!: ViewChildexample2;

 show()
  {
    console.log(this.childComponent.ExamResult);
    console.log(this.childComponent.ShowChildExample());
  }

}