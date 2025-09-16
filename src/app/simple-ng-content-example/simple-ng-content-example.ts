import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-simple-ng-content-example',
  imports: [],
  templateUrl: './simple-ng-content-example.html',
  styleUrl: './simple-ng-content-example.css'
})
export class SimpleNgContentExample implements AfterContentInit,AfterContentChecked{
 
  ngAfterContentInit(): void {
    console.log('Content Init');
  }
 ngAfterContentChecked(): void {
    console.log('Content Checked');
  }
}
