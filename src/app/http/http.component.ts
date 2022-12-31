import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {
  protected users!: Observable<IUser[]>;
  todo=null;
constructor(public userservice:UserService){}
ngOnInit(): void{
// this.userservice.getUsers().subscribe(res=>{
//   this.users=res;
// })
// this.userservice.getUsers(2).subscribe(data=>this.todo=data);
}
}
