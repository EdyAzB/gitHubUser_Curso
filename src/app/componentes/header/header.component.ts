import { Component, EventEmitter, inject, Output, output } from '@angular/core';
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

  @Output() nombreEmitido: EventEmitter<string>; 
 constructor() {
    this.nombreEmitido = new EventEmitter();
    this.searchForm = new FormGroup(
      {
        name : new FormControl ('',[])

    },[]) 
  }
  getData():void{

 this.nombreEmitido.emit(this.searchForm.value.name)
}

}