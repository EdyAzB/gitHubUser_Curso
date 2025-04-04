import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { UserService } from '../../servicios/user.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchForm: FormGroup
 private userService = inject(UserService)
  
 constructor() {
    this.searchForm = new FormGroup(
      {
        name : new FormControl ('',[])

    },[])
  }
   async getData(): Promise<void> {
    let name = this.searchForm.value.name;
    let response = await this.userService.getUserByName(name);
  }
}
   