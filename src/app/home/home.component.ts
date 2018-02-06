import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public languages = ['english','hindi','french'];
  public fName:boolean=false;
  public firstName: string ;
  public lastName: string = "singh";
  public isFullTime: boolean = true;
  public paymentType: string ;
  public primaryLanguage: string ;
  public hasPrimaryLanguageError: boolean =true;
  constructor() { }

  firstNameChanged(value: string){
    if (value.length > 0)
      this.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.firstName = value;

  }
  ValidatePrimaryLanguage(event){
    if(this.primaryLanguage=="default"){
      this.hasPrimaryLanguageError=true;
    }
    else
      this.hasPrimaryLanguageError=false;

      console.log(this.hasPrimaryLanguageError);
  }
  ngOnInit() {
  }

}
