import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()

export class LoginGuardService implements CanActivate{
    //declare where ever you want to use as canactivate and guard name - import in 
    //app module since it is service and also import in routing module in providers
    token;

    constructor(private router:Router){
        
    }
    canActivate():boolean{
        this.token= sessionStorage.getItem('TOKEN_NUMBER');
        if(this.token==null){
            this.router.navigate(['/login'])
            return false;
            }
        else{
            return true
        }    
    }

}