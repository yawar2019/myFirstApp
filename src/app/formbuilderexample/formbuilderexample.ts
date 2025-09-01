import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilderexample',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formbuilderexample.html',
  styleUrl: './formbuilderexample.css'
})
export class Formbuilderexample {

stdForm:FormGroup;

constructor( private fbuilder:FormBuilder)
{

 this.stdForm=this.fbuilder.group({
  firstname:["",[Validators.required]],
  lastname:"",
  username:"",
  city:"",
  state:"",
  zipcode:"",
  isAgreed:"",
})
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
  console.log(this.stdForm);
}

}
