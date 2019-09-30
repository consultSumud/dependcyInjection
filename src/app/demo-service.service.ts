import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  printToConsole(arg){
    console.log(arg);
  }
}
