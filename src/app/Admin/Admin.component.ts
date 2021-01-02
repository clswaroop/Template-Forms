import { Component, OnInit } from "@angular/core";
import { AdminService } from './Admin.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./Admin.component.html'
})

export class AdminComponent implements OnInit{
    allUser;
    constructor(private adminService:AdminService,private router:Router){
        
    }
    ngOnInit(): void {
        this.adminService.getUsers().subscribe((res)=>this.allUser=res)
    }
}