import { Component, OnInit } from "@angular/core";
import { LoginService } from '../loginForm/login.services';
import { Router } from '@angular/router';



@Component({
templateUrl:'./profile.component.html'
})
export class ProfileComponent implements OnInit{
    
    token;
    userInfo;
    constructor(private loginService:LoginService,private router:Router){

    }
    ngOnInit(): void {
        this.token = sessionStorage.getItem('TOKEN_NUMBER');
        console.log("Token"+this.token);
        this.loginService.getUserInfo(this.token).subscribe((res)=>this.userInfo=res)
        console.log("userInfo"+this.userInfo); 
    }

    logout():void{
        sessionStorage.removeItem('TOKEN_NUMBER');
        sessionStorage.removeItem('roleType');
        this.router.navigate(['./login'])
    }

}