import { Component } from '@angular/core';
import { HeaderDefferd } from '../header-defferd/header-defferd';
import { BodyDefferd } from '../body-defferd/body-defferd';
import { FooterDefferd } from '../footer-defferd/footer-defferd';
import { About } from '../about/about';
@Component({
  selector: 'app-deferred-view-example',
  imports: [HeaderDefferd,BodyDefferd,FooterDefferd,About],
  templateUrl: './deferred-view-example.html',
  styleUrl: './deferred-view-example.css'
})
export class DeferredViewExample {
isAvailable: boolean = false; 
}
