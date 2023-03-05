import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.css']
})
export class ReactFormsComponent implements OnInit {

  regForm:FormGroup;
  msginfo:string="";

  constructor() {

    this.regForm = new FormGroup({
      personname: new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern("^[a-zA-Z]*$")]),
      gender : new FormControl("",[Validators.required]),
      location: new FormControl("",[Validators.required]),
      pincode: new FormControl("",[Validators.required, Validators.maxLength(6),Validators.minLength(6)])

    })
   }

  ngOnInit(): void {
  }
  showValues(){
    if(this.regForm.valid){
      this.msginfo = "Person name: "+this.regForm.controls.personname.value;
      this.msginfo += "<br /> Gender: " + this.regForm.controls.gender.value;
      this.msginfo += "<br />Location: " + this.regForm.controls.location.value;
      this.msginfo += "<br />Pincode: " + this.regForm.controls.pincode.value;
    }
   else{
    this.msginfo="Invalid form";
   }

  }

}
