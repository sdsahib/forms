import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  languages = ['english','hindi','french'];
 
  public firstName: string = "Sahib";
  public lastName: string = "singh";
  public isFullTime: boolean = true;
  public paymentType: string ;
  public primaryLanguage: string = "English";
  constructor() { }

  firstNameChanged(value: string){
    if (value.length > 0)
      this.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.firstName = value;

  }
  ngOnInit() {
  }

}
