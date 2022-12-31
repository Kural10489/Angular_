import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UservalidationService {
loginstatus:boolean | undefined;
isUserEmpty:boolean | undefined;
isUserandPasswordEmpty:boolean | undefined;
isPasswordEmpty:boolean | undefined;
  constructor() { }
//   checkValidation(username: any,password: any){
// console.log(username);
// console.log(password);
// if((username=="kural")&&(password=="test"))
// {
// return this.loginstatus=true;
// }
// else if((username=="")&&(password=="test"))
// {
//   this.isUserEmpty=true;
// return this.loginstatus=false;
// }
// else if((username=="kural")&&(password==""))
// {
//   this.isPasswordEmpty=true;
// return this.loginstatus=false;
// }
// else if((username=="")&&(password==""))
// {
//   this.isUserandPasswordEmpty=true;
// return this.loginstatus=false;
// }
// }

}
