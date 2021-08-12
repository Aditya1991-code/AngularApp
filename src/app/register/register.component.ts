import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstnamedata: string= '';
  lastnamedata: string='';
  agedata: string='';
  emaildata: string='';
  birthdaydata: string='';
  usernamedata: string='';
  maledata: string='';
  femaledata: string='';
  passworddata: string='';

  constructor() { }
  registrationform(): void {
    console.log(this.firstnamedata)
    console.log(this.lastnamedata)
    console.log(this.agedata)
    console.log(this.emaildata)
    console.log(this.usernamedata)
    console.log(this.passworddata)
    
  }

  ngOnInit(): void {
  }

}
