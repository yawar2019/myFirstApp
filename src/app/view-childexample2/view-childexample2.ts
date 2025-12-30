import { Component } from '@angular/core';

@Component({
  selector: 'app-view-childexample2',
  imports: [],
  templateUrl: './view-childexample2.html',
  styleUrl: './view-childexample2.css'
})
export class ViewChildexample2 {

  ExamResult='Pass';
  ShowChildExample()
  {
    console.log('Child Method is Called');
  }

}
