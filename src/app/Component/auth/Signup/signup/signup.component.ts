import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:any;
  password:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  subvalue(form:NgForm){

    localStorage.setItem('email',form.value.email);
    localStorage.setItem('password',form.value.password);

   if(this.email==null && this.password==null){
     alert("not created");
     this.route.navigateByUrl('signup');

   }
   else{
     alert("created please wait while we redirecting to login page.....");
     this.route.navigateByUrl('');
   }



  }

}
