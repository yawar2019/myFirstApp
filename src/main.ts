import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { About } from './app/about/about';
import { Contact } from './app/contact/contact';
import { Layout } from './app/layout/layout';
import { RxjxExample } from './app/rxjx-example/rxjx-example';
import { ViewChildExample } from './app/view-child-example/view-child-example';
import { Parent } from './app/parent/parent';

bootstrapApplication(Parent, appConfig)
  .catch((err) => console.error(err));
