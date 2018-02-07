import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/Observable";


@Injectable()
export class FormPoster{

    constructor(private http:Http){

    }

    postEmployee(employee: Employee): Observable<any>{
        console.log("Posting Employee : ", employee);
        return;
    }
}