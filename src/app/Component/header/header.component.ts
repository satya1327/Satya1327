import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getproducts().subscribe(res=>{
        this.totalItem=res.length;
    });
  }
  navi(){
    this.router.navigateByUrl('cart');
  }
  clk(){
    this.router.navigateByUrl('products')
  }
  logout(){
    this.router.navigateByUrl('');
  }

}
