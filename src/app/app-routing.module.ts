import { SignupComponent } from './Component/auth/Signup/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { ProductComponent } from './Component/product/product.component';
import { AuthComponent } from './Component/auth/auth.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductsGuard } from './products.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';



const routes: Routes = [

{path:'signup',component:SignupComponent},
{path:'',component:AuthComponent},
{path:'header',component:HeaderComponent},
  {path:'products', component:ProductComponent,canActivate:[ProductsGuard]},
  {path:'cart',component:CartComponent},
  {path:'ok',component:ProductComponent},
  {path:'errorpage',component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
