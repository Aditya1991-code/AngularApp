import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactName: string='Mahesh';
  contactEmail: string='mahesh@gmail.com';
  contactPhone: string='+919949060767';
  contactFax: string='+17733819953';


  constructor() { }

  ngOnInit(): void {
  }

}
