import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
//import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { from } from 'rxjs'
import {AppRoutingModule} from './app-routing.module'
import { RegisterComponent } from './registerForm/registerFrom.component';
import { RegisterService } from './registerForm/register.services';
import { LoginComponent } from './loginForm/login.component';
import { HeaderComponent } from './Header/header.component';
import { LoginService } from './loginForm/login.services';
import { ProfileComponent } from './profile/profile.component';
import { AdminService } from './Admin/Admin.service';
import { AdminComponent } from './Admin/Admin.component';
import { LoginGuardService } from './login-gaurd.service';
import { AdminGuardService } from './Admin/admin-guard.service';

@NgModule({
    declarations:[
        //All components goes in declaration
      AppComponent,
      HeaderComponent,
      LoginComponent,
      RegisterComponent,
      ProfileComponent,
      AdminComponent
    ],
    imports:[
        //All modules goes in imports
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers:[
        RegisterService,
        LoginService,
        AdminService,
        LoginGuardService,
        AdminGuardService
    ],

    bootstrap:[
        //First component that loads goes here
        AppComponent
    ]
})

export class AppModule{

}