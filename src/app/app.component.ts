import { Component } from '@angular/core';
import { AuthService } from './services/guards/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth:AuthService){}
  title = 'Angular';
  authenticate=true;
  
  onLogin(){
    this.auth.login();
    this.authenticate=false;
  }
  onLogout(){
    this.auth.logout();
    this.authenticate=true;
  }
}
