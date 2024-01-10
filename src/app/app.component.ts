import { Component } from '@angular/core';

interface Elements {
  elementName: string;
  elementType: string;
  radioOption:string;
  Options:string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  emptyData: any;
  constructor(){}

  renderUser:boolean=false;
  
  receivedData: Elements[] = [];


  handleAddFieldData(data:Elements[]) {
    console.log('Data received in AppComponent:', data);
    this.receivedData = Array.from(new Set([...this.receivedData, ...data]));
     
  }
  
  showUser() {
    this.renderUser = true;
  }

}



