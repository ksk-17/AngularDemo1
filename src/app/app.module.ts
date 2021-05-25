import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionComponent } from './television/television.component';
import { BikesComponent } from './bikes/bikes.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    ProductsComponent,
    MobilesComponent,
    TelevisionComponent,
    BikesComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
