import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service";
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  receivedData: any[] = [];
  toggle_option : boolean = false;
  show_answer : boolean = true;
 
  Options: string[] = [];
  addToHtml:string = "";
 
  flag: boolean = false;
  rowMyHtml:string = "";
  rowHtml: string = "";
  tempHtml : string = "";
 

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
  this.receivedData = this.shared.getForm();
  console.log('Data received in userComponent:', this.receivedData);
   
  }
  

  viewForm(): void {
    const generatedHtml = this.handleGenerateForm();
    
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(generatedHtml);
    } else {
      alert('Unable to open a new window. Please check your browser settings.');
    }
  }

  handleGenerateForm():any{
    this.rowMyHtml='<form>'
    this.receivedData.forEach((element, i) => {
      if(element.elementType==="text" || element.elementType==="email" || element.elementType ==="password"){
        
        this.tempHtml = `<label  style="margin-left: 10px; ">${element.elementName} ${element.radioOption=="yes"?'*':''}</label>\n`
        this.tempHtml += `<input style="margin: 5px; padding: 5px;" type=${element.elementType} ${element.radioOption=="yes"?'required':''}></input> \n <br>\n`;
      }
      else if (element.elementType === "email") {
        this.tempHtml = `<label style="margin-left: 10px;">${element.elementName} ${element.radioOption == "yes" ? '*' : ''}</label>\n`;
        this.tempHtml += `<input style="margin: 5px; padding: 5px;" type=${element.elementType} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" ${element.radioOption == "yes" ? 'required' : ''}></input> \n <br>\n`;}

      else {
       
        this.tempHtml = `<label  style="margin-left: 10px; ">${element.elementName} ${element.radioOption=="yes"?'*':''}</label>\n`
        this.tempHtml += '<select>';
        element.Options.forEach((ele:any)=>{
          this.tempHtml += `<option>${ele}</option>`;
        })
        this.tempHtml += `</select>\n<br>\n`
      }
      this.rowMyHtml += this.tempHtml;

    });
    this.rowMyHtml += `  <button  type="submit" value="Submit"/>Submit</button>\n`;
    this.rowMyHtml += '</form>'
    this.rowHtml = this.rowMyHtml;
    return this.rowHtml
  }

}
