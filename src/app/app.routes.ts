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
      {path:'crud',component:Employeedetails}
];
