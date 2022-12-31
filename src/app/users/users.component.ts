import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  // 
  constructor(private route: Router,private ActiveRoute:ActivatedRoute){}

  user!:{id:string; name:string};

   ngOnInit():void{
    // this.user={
    //   id:this.ActiveRoute.snapshot.params['id'],
    //   name:this.ActiveRoute.snapshot.params['name']
    // }
   this.ActiveRoute.params.subscribe((data:Params)=>{
    this.user={
      id:data['id'],
      name:data['name'],
    }
   });
  }

  navToCategoriesbtn(){
    this.route.navigate(['/categories']);
  }
}
