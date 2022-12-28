import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  protected url='https://run.mocky.io/v3/d6b8e295-bb63-45df-89ad-c785641b8444';

  getUsers():Observable<any>{
    return this.http.get(this.url).pipe(map(res=>res));
  }
}
  