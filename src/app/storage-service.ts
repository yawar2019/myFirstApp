import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
   setAuthDetails(value:string)
  {
// localStorage.setItem('validCred',value);
 sessionStorage.setItem('validCred',value);
  }

  getAuthDetails()
  {
  //let result:string="";
  //let result=localStorage.getItem('validCred')?.toString();
  let result=sessionStorage.getItem('validCred')?.toString();
  return result;
  }
}
