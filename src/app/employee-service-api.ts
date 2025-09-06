import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceApi implements OnInit {
  url="https://localhost:44361/";


Employee:IEmployee={
  EmpId: 0,
  EmpName: '',
  EmpSalary: 0
}

AllEmployees:IEmployee[]=[];

constructor(private http:HttpClient)
 { 


}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

getEmployees():Observable<any>
{

  return this.http.get(this.url+'api/EmpApi');

}

SaveEmployees(Employee:IEmployee):Observable<any>
{
if(Employee.EmpId>0)
{
  return this.http.put(this.url+'api/EmpApi/'+Employee.EmpId,Employee);

}
else{
  return this.http.post(this.url+'api/EmpApi',Employee);
}
}

DeleteEmployee(Id:any):Observable<any>
{

  return this.http.delete(this.url+'api/EmpApi/'+Id);

}

  
}
