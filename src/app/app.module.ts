import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import{HttpClientModule} from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';

// Can take a array of Routes 
import { Routes,RouterModule } from '@angular/router';
//For Auth Guard 
import { AuthService } from './services/guards/auth.service';
import { authGuardService } from './services/guards/authGuard.service';
import { categoriesModule } from './categories.module';
const appRoutes:Routes=[
  {path:'',component:HomeComponent}, //localhost4200
  {path:'users',component:UsersComponent,
  canActivate:[authGuardService],
  children:[{path:':id/:name',component:UsersComponent}]},
  // {path:'categories',component:CategoriesComponent}
  {path:'categories',loadChildren:()=>import('./categories.module').then(m=>m.categoriesModule)}
]
@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    TestingComponent,
    HomeComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [AuthService,authGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
