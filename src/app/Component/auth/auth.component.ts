import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username:any;
    password:any;

  constructor(private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {

  }

  Success(login:NgForm){
     var email=localStorage.getItem("email");
     var password=localStorage.getItem("password");
     if(this.username===email && this.password===password){
       alert("succesfully Loged in");
       this.router.navigateByUrl('products');
     }
     else{
       alert("invalid credential");
       this.router.navigateByUrl('login');
     }

  }


}
