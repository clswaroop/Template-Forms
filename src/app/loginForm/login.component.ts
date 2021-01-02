import {Component} from '@angular/core';
import { ILogin } from './login.model';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.services';
import { Router } from '@angular/router';

@Component({
    //component that is being nested should have selector
    //if it is directly used u need routor
    selector: 'app-forms',
    templateUrl: './login.component.html'
})

export class LoginComponent{

    myUser=new ILogin('','',)
    constructor(private loginService:LoginService,private router:Router){
        
    }

      submitForm(form:NgForm):void{
        console.log(form.value);
        this.loginService.loginUser(form.value)
        .subscribe((res)=>this.loginService.getUserInfo(res['token'])
        .subscribe((userInfoRes) =>this.userRole(userInfoRes['role'])
        ))
    }

    userRole(typeOfUser):void{
        sessionStorage.setItem("roleType",typeOfUser);
        console.log("Go to Profile---" +typeOfUser);
        this.router.navigate(['/profile'])
    }

}