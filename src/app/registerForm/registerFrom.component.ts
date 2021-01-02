import {Component} from '@angular/core';
import {IRegister } from './registerFrom.model';
import {NgForm} from '@angular/forms';
import { RegisterService } from './register.services';
import { Router } from '@angular/router';

@Component({
    //component that is being nested should have selector
    //if it is directly used u need routor
    selector: 'app-forms',
    templateUrl: './registerFrom.component.html'
})

export class RegisterComponent{
    myUser=new IRegister('','','')
    constructor(private registerService:RegisterService,private router:Router){
        
    }

    submitForm(form:NgForm):void{
        console.log(form.value);
        this.registerService.registerUser(form.value)
        .subscribe((res)=>this.router.navigate(['/login']))
    }

    
    firstToUpper(value):void{
        console.log('Enteredvalue'+value);
        if(value.length > 0){
            this.myUser.name=value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }else{
            this.myUser.name=value
        }
    }
    
}