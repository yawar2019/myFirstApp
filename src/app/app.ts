import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { FormsModule } from '@angular/forms';
import {CommonModule} from  '@angular/common';
import { About } from './about/about';
import { AppService } from './app-service';

interface IContact
{
 id:number;
 name:string;
 email:string; 
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Contact,FormsModule,CommonModule],
  templateUrl:'./app.html',
  styleUrl: './app.css'
})


export class App {
  title:string="hi everyone";
  hero="shaktiman";
  srcUrl="https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png";


constructor(private appser:AppService)
{

}

  firstsize="firstsizecss";
firstbackcolorcss="firstbackcolorcss";

firstCssArr=["first","firstsizecss","firstbackcolorcss"];
firstCssObj=
{
first:true,
firstsizecss:true,
firstbackcolorcss:true
}

hastrue=true;
firstStyle={"color":"blue","background-color":"red"};

secondStyle=this.hastrue?"red":"green";
fontsizeStyle="20px";

  getResult(a:any)
  {
alert(a+" is a value");
  }

getEventValue(event:any)
  {
    console.log(event);
  }

  UserName="Jivan";

  cars=['BMW','NANO','AUDI'];
  sports=[
          {id:1,name:'cricket'}
          ,{id:2,name:'hockey'},
          {id:3,name:'kabadi'}
        ]

        contacts:IContact[]=[
          {
          id:1,
          name:'ravi',
          email:'ravi@123gmail.com',
        },

        {
          id:2,
          name:'swati',
          email:'swati@123gmail.com'
        },
        {
          id:3,
          name:'prakash',
          email:'prakash@123gmail.com'
        },
        
        ]

        isCarAvailable=true;
        SwitchVar="K";

fun(value:any)
{
  alert(value);
}

login()
{
  this.appser.setAuthdetails("true");
}


logout()
{
  this.appser.setAuthdetails("false");
}



}
