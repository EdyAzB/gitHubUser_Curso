import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../interface/user';
import { UserService } from '../../servicios/user.service';
@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit {
  myUser !: User | any;
  private activetedRoute = inject(ActivatedRoute);
  private userServis = inject(UserService) 
 
  ngOnInit(): void {
    this.activetedRoute.params.subscribe(async (params:any)=>{
      let login = params.userlogin;
      this.myUser = await this.userServis.getUserByLogin(login);
     })
  }
}
