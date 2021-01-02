import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class RegisterService{

    private url = "http://localhost:5000/api/auth/register";
    constructor(private httpClient:HttpClient){}
    
    registerUser(user):Observable<any[]>{
        return this.httpClient.post<any[]>(this.url,user)
    }
}