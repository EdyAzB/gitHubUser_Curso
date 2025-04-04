import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { UserViewComponent } from './componentes/user-view/user-view.component';

export const routes: Routes = [
    {
        path: "", pathMatch: 'full', redirectTo: 'home'
    },
    {
        path:"home", component: HomeComponent
    },
    {
        path: "user/:userlogin", component: UserViewComponent
    }
];
