import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry, AllCommunityModule,ColDef } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-aggridcommunityexample',
  imports: [AgGridModule],
  templateUrl: './aggridcommunityexample.html',
  styleUrl: './aggridcommunityexample.css'
})
export class Aggridcommunityexample {
columnDefs:ColDef[]=[{headerName:'EmpId',field:'EmpId'},
{headerName:'EmpName',field:'EmpName'},
{headerName:'EmpSalary',field:'EmpSalary'}];

rowData=[{EmpId:1,EmpName:'abc',EmpSalary:'10000'},
         {EmpId:2,EmpName:'cde',EmpSalary:'20000'},
         {EmpId:3,EmpName:'fgh',EmpSalary:'30000'}]

}
