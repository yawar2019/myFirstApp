import { Component } from '@angular/core';
import { StorageService } from '../storage-service';

@Component({
  selector: 'app-session-and-local-storage-example',
  imports: [],
  templateUrl: './session-and-local-storage-example.html',
  styleUrl: './session-and-local-storage-example.css'
})
export class SessionAndLocalStorageExample {

   result:any;
  constructor(private app:StorageService)
  {

  }

  login()
  {
this.app.setAuthDetails("true");
this.result=this.app.getAuthDetails();  
}
  logout()
  {
this.app.setAuthDetails("false");
this.result=this.app.getAuthDetails();  
}
  
Remove()
{
  localStorage.clear();
}
}
