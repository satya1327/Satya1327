import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any=[];
  grandTotal:number=0;
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getproducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(items:any){
    this.cartService.removeCartItem(items);
  }
  emptycart(){
    this.cartService.removeAllcart();
  }
 
  pro(){
    this.router.navigateByUrl('products');
  }
}
