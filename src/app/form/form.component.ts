import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {SharedService} from "../shared/shared.service"


interface Elements {
  elementName: string;
  elementType: string;
  radioOption:string;
  Options: string[],

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})

export class FormComponent implements OnInit {
  
  @Output() addFieldData = new EventEmitter<Elements[]>();
  @Output() renderFormEvent = new EventEmitter<void>();

  elementName: string = '';
  elementType: string = '';
  radioOption: string = '1';
  Options:string[]=[];
  texting:string='';
  Value: Elements[] = [];
  constructor(private shared:SharedService) { }
  

  

  addField() {
    const data = {
      elementName: this.elementName,
      elementType: this.elementType ,
      radioOption: this.radioOption,
      Options:this.Options
    };
    this.Value.push(data);
      this.addFieldData.emit(this.Value);
      this.elementName='';
      this.elementType='';
      this.Options=[];
      this.radioOption='';
    }
   
  
    ngOnInit(): void {
      
    this.shared.setForm(this.Value)
  }
  
  showForm(){
    this.renderFormEvent.emit();

  }
  
  changeTexting(){
    this.texting = this.texting;
    this.Options.push(this.texting);
    this.texting = '';
    
   
  }

}
