import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()


export class AdminService{
    
    constructor(private httpClient:HttpClient){}
    private getAllUsers ="http://localhost:5000/api/auth/users";

    getUsers():Observable<any[]>{
        return this.httpClient.get<any>(this.getAllUsers);
    }

}