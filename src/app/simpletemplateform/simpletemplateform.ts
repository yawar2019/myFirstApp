import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpletemplateform',
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './simpletemplateform.html',
  styleUrl: './simpletemplateform.css'
})
export class Simpletemplateform {
studentObj:any={
  firstname:"",
  lastname:"",
  username:"",
  city:"",
  state:"",
  zipcode:"",
  isAgreed:false,
}

Indiastates=
[
  {
id:1,
name:'Andhra Pradesh'
},
{
id:2,
name:'Telangana'
},
{
id:3,
name:'Uttar Pradesh'
}

]

onSubmit()
{
  console.log(this.studentObj);
}

}
