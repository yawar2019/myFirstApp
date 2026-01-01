import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [CommonModule],
  templateUrl: './children.html',
  styleUrl: './children.css'
})
export class Children {
showContent = false;
}
