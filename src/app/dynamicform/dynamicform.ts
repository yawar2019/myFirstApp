import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamicform.html',
  styleUrl: './dynamicform.css'
})
export class Dynamicform implements OnInit {
form!:FormGroup;
formConfig=[
  {
name:'firstName',
label:'First Name',
type:'text',
value:'',
Validators:{
  required:true
}
 },
   {
name:'lastName',
label:'Last Name',
type:'text',
value:'',
Validators:{
  required:true
}
 }
]

constructor(private fb:FormBuilder){

}
  ngOnInit(): void {
    this.buildForm();
  }



buildForm()
{
  const group:{[key:string]:any}={};
  this.formConfig.forEach(control=>{


group[control.name]=[control.value|| ""];

  })

  this.form=this.fb.group(group);
}



}
