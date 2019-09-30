import { Component } from '@angular/core';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private svc:DemoServiceService){
    svc.printToConsole("got the service");

  }

}
