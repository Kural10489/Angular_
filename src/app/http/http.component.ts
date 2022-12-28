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

constructor(public userservice:UserService){}
ngOnInit(): void{
this.userservice.getUsers().subscribe(res=>{
  this.users=res;
})
}
}
