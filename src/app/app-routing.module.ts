import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionComponent } from './television/television.component';
import { BikesComponent } from './bikes/bikes.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"products",component:ProductsComponent,children:[{path:"mobiles",component:MobilesComponent},{path:"television",component:TelevisionComponent},{path:"bikes",component:BikesComponent},{path:"",redirectTo:"/products/mobiles",pathMatch:"full"}]},
  {path:"user",component:UserComponent},
  {path:"user/:id",component: UserDetailsComponent},
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"**",redirectTo:"/home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
