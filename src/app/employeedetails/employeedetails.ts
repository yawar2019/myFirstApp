import { Component } from '@angular/core';
import { EmployeeServiceApi } from '../employee-service-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeedetails',
  imports: [CommonModule,FormsModule],
  templateUrl: './employeedetails.html',
  styleUrl: './employeedetails.css'
})
export class Employeedetails {
constructor(public service:EmployeeServiceApi)
  {

  }
  ngOnInit(): void {
    this.service.getEmployees().subscribe(data=>{
      this.service.AllEmployees=data;
    })


  }

  EmployeeAdd(Employee:IEmployee)
  {
    this.service.SaveEmployees(Employee).subscribe(data=>{
       
    this.service.getEmployees().subscribe(data=>{
      this.service.AllEmployees=data;
    })


  })

  }

  EmployeeEdit(id:any){
    this.service.Employee=this.service.AllEmployees.find(x=>x.EmpId==id) as IEmployee;
  }

EmployeeDelete(id:any)
{
   let result=confirm("Do you want to Delete?");
   if(result)
  {
this.service.DeleteEmployee(id).subscribe(data=>{
  this.service.getEmployees().subscribe(data=>{
    this.service.AllEmployees=data;
  })
})
}
}
}
