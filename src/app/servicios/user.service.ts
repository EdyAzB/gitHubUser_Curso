import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
/* https://api.github.com/search/users?q=YOUR_NAME */
/* https://api.github.com/users/YOUR_NAME */
baseUrl: string = ' https://api.github.com/';

 private httpClient = inject(HttpClient);
 

getUserByName(pName: string) : Promise<any> {
  return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}search/users?q=${pName}`))
}  
getUserByLogin(pLogin: string): Promise<any> {
  return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}users/${pLogin}`))
}

}
