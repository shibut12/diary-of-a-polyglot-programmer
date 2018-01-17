import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[];
  }
  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
   }

   get users(): Observable<User[]>{
     return this._users.asObservable();
   }

   loadAll(){
     const userUrl = 'https://angular-material-api.azurewebsites.net/users';
     return this.http.get<User[]>(userUrl)
       .subscribe(data => {
         this.dataStore.users = data;
         this._users.next(Object.assign({}, this.dataStore).users);
       }, error => {
         console.log("Failed to fetch users");
       });
   }
}
