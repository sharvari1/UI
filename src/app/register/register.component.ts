import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  logEmail:string="";
  logPassword:string="";

  signUpName:string="";
  signUpEmail:string="";
  signUpPassword1:string="";
  signUpPassword2:string="";
  constructor(private r:Router) { }

  ngOnInit() {
  }
  login(){
    alert(this.logEmail+"  "+this.logPassword);
    this.r.navigate(['home']);
  }
  signup(){
    alert(this.signUpEmail+"  "+this.signUpName+"  "+this.signUpPassword1+"  "+this.signUpPassword2);
    this.r.navigate(['hbout']);
  }
}
