import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class authGuardService implements CanActivate{

    constructor(private auth:AuthService,private route:Router){}
   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): 
   boolean | Promise<boolean> |Observable<boolean>{
    let isLoggedIn=this.auth.isAuthenticated();
    if(isLoggedIn){
        return true;
    }
    else{
      return  this.route.navigate(['/']);
    }
    
   }
}