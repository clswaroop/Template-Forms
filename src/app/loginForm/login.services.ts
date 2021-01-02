import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class LoginService{

    private login_url = "http://localhost:5000/api/auth/login";
    private userInfo = " http://localhost:5000/api/auth/userinfo";

    constructor(private httpClient:HttpClient){}
    
    loginUser(user):Observable<any[]>{
        return this.httpClient.post<any[]>(this.login_url,user)
    }

    getUserInfo(token){
        sessionStorage.setItem('TOKEN_NUMBER', token);
        console.log('TOKEN_NUMBER', token)
        return this.httpClient.get(this.userInfo, {headers: {'x-access-token':token}})
    }
}