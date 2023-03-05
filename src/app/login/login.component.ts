import { Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  pwd: string = "";
  msg: string = "";
  constructor(@Inject(LoginService) private ls:LoginService,
  private router:Router) { }

  ngOnInit(): void {
  }
 
  ChkUserDetails(){
    if (this.ls.UserCheckDetails(this.username,this.pwd)==true) {
      this.router.navigate(['welcome']);
    }
    else{
      this.msg = "Check username/Password";
    }
  }

}
