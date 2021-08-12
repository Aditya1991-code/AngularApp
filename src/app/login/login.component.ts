import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   namedata: string= '';
   emaildata: string= '';
   phonedata: string='';

  constructor() { }
  handleLogin(): void {
    console.log(this.namedata)
    console.log(this.emaildata)
    console.log(this.phonedata)
  }
  ngOnInit(): void {
  
  }

  

}
