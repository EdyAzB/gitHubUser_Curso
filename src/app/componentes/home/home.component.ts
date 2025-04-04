import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { User } from '../../interface/user';
import { UserService } from '../../servicios/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
private userService = inject(UserService)

arrUsers: User[] = [];
 

async getUsers($event: string): Promise<void> {

let name = $event;
try{ 
   let response = await this.userService.getUserByName(name);
   this.arrUsers = response.items.slice(1,11); 
 }catch(err){
  console.error(err)
 }
}
  }

