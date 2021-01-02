import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RegisterComponent} from './registerForm/registerFrom.component'
import { LoginComponent } from './loginForm/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './Admin/Admin.component';
import { LoginGuardService } from './login-gaurd.service';
import { AdminGuardService } from './Admin/admin-guard.service';

const routes:Routes =[

    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    //{path:"profile",component:ProfileComponent},
    {path:"profile",component:ProfileComponent,canActivate:[LoginGuardService]},
    {path:"admin",component:AdminComponent,canActivate:[AdminGuardService]},
    {path:'',redirectTo:'register', pathMatch:'full'}
    
]

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    //Guards
    providers:[
        LoginGuardService,
        AdminGuardService
    ],
    //Export router module - bcoz routing is made new module [any module we create to be exported]
    exports:[RouterModule]
})

export class AppRoutingModule{

}