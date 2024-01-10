import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   
  formData:any[]=[];
  constructor() { }
  setForm(data:any[]){
    this.formData=data
  }

  getForm():any[]{
    return this.formData
  }
}
