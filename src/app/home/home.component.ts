import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model'
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public fName:boolean=false;
 
  public hasPrimaryLanguageError: boolean =true;

  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Sahib', '', false, '', 'default');
 
  constructor(private formPoster: FormPoster) { 

  }

  firstNameChanged(value: string){
    if (value.length > 0)
      value = value.charAt(0).toUpperCase() + value.slice(1);
    else
      value = value;

  }
  ValidatePrimaryLanguage(){
    //console.log(this.hasPrimaryLanguageError);
    if(this.model.primaryLanguage=="default"){
      this.hasPrimaryLanguageError=true;
    }
    else
      this.hasPrimaryLanguageError=false;

      console.log(this.hasPrimaryLanguageError);
  }

  submitForm(form:NgForm){
    this.ValidatePrimaryLanguage();
    if(this.hasPrimaryLanguageError)
        return;
    this.formPoster.postEmployee(this.model)
        .subscribe(
          data => console.log('success:' ,data),
          err => console.log('Error',err)

        );
  }
  ngOnInit() {
  }

}
