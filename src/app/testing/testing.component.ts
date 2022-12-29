import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { UservalidationService } from '../uservalidation.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {

  Userform:FormGroup | undefined;
  username: any;
  password: any;
  constructor(private fb:FormBuilder,public objservice:UservalidationService){
  this.Userform=this.fb.group(
    {
      username:[''],
      password:['']
    }
  );
//   login(this.Userform){
// this.objservice.loginstatus=this.objservice.checkValidation(this.username,this.password)
//   }
// }
}
;
}

