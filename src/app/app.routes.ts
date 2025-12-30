import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Appguard } from './appguard';
import { AppDeactivateGuardService } from './app-deactivate-guard-service';
import { Simpletemplateform } from './simpletemplateform/simpletemplateform';
import { ReactiveFormEx } from './reactive-form-ex/reactive-form-ex';
import { Dynamicform } from './dynamicform/dynamicform';
import { Formbuilderexample } from './formbuilderexample/formbuilderexample';
import { Pipeexanple } from './pipeexanple/pipeexanple';
import { Employeedetails } from './employeedetails/employeedetails';
import { HooksExample } from './hooks-example/hooks-example';
import { Signalexample } from './signalexample/signalexample';
import { SignalGetCounterEx2 } from './signal-get-counter-ex2/signal-get-counter-ex2';
import { RxjxExample } from './rxjx-example/rxjx-example';
import { SessionAndLocalStorageExample } from './session-and-local-storage-example/session-and-local-storage-example';

export const routes: Routes = [

    {path:"",component:App},
    {path:"about/:id/:name",component:About},
    {path:"contact",
        component:Contact,
        //canActivate:[Appguard],
    children:[{path:':id/:name',component:About,canDeactivate:[AppDeactivateGuardService]}]
    },
    {path:"simpletemplateform" ,component:Simpletemplateform},
    {path:"reactiveform" ,component:ReactiveFormEx},
     {path:"dynamicform" ,component:Dynamicform},//app-formbuilderexample
     {path:"formbuilder" ,component:Formbuilderexample},
     {path:'pipeexample',component:Pipeexanple},
      {path:'crud',component:Employeedetails},
       {path:'hooks',component:HooksExample},
         {path:'signalexample',component:Signalexample},
         {path:'signalexample2',component:SignalGetCounterEx2},
         {path:'rxjx',component:RxjxExample}, 
         {path:'sessionStorage',component:SessionAndLocalStorageExample},
         {path:'profile',loadComponent:()=>import('./userprofile/userprofile').then(m=>m.Userprofile)}

    ];
