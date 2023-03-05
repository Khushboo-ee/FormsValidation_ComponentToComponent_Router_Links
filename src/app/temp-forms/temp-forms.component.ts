import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../person';
import { PersonInfoService } from '../person-info.service';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styleUrls: ['./temp-forms.component.css']
})
export class TempFormsComponent implements OnInit {

  personname:string="";
  gender:string="";
  msg:string="";
  pincode:string="";
  location:string = "";
  tblinfo:string = "";
  pinfo:Person;

  constructor(@Inject(PersonInfoService) private ps:PersonInfoService){ }

  ngOnInit(): void {
  }

  ShowValues (frmReg:any)
  {
    if(frmReg.valid){
      this.ps.AddPerson(this.personname,this.gender,this.location,this.pincode);
      var p = this.ps.viewAllPersons();

      this.tblinfo = "<table width='100%' border='1'>";
      this.tblinfo += "<tr><th>Person Name</th><th>Gender</th><th>Location</th><th>Pincode</th></tr>";
     
    
        this.tblinfo += "<tr>";
        this.tblinfo += "<td>" + p[0].pname + "</td>";
        this.tblinfo += "<td>" + p[0].gender+ "</td>";
        this.tblinfo += "<td>" + p[0].location + "</td>";
        this.tblinfo += "<td>" + p[0].pincode + "</td>";
        this.tblinfo += "</tr>";  
        this.tblinfo += "</table>";
        
  
     

     // this.msg = "Name : " + this.personname + "<br />Gender : " + this.gender;
      //this.msg += "<br />Location : " + this.location + "<br />Pincode : " + this.pincode;
    }
    else{
      this.msg = "Invalid form submission, some required fields are missing";
    }
  }
}
