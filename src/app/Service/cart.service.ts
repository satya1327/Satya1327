import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public  cartItemList:any=[]
public productList=new BehaviorSubject<any>([]);

  constructor() { }
  getproducts(){
    return this.productList.asObservable();

  }
  setproduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);


  }
  addtoCart(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice():number{
    let grandtotal=0;
    this.cartItemList.map((a:any)=>
    {
      grandtotal+=a.price;
    })
    return grandtotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index :any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
    removeAllcart(){
      this.cartItemList=[];
      this.productList.next(this.cartItemList);
    }
   
 
}


