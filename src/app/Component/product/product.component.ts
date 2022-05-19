import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList:any;


  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productList=res;
      this.productList.array.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

  }
  addToCart(item:any){
    this.cartService.addtoCart(item);

  }

}
