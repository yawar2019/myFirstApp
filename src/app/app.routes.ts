import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Appguard } from './appguard';
import { AppDeactivateGuardService } from './app-deactivate-guard-service';

export const routes: Routes = [

    {path:"",component:App},
    {path:"about/:id/:name",component:About},
    {path:"contact",
        component:Contact,
        //canActivate:[Appguard],
    children:[{path:':id/:name',component:About,canDeactivate:[AppDeactivateGuardService]}]
    },
];
