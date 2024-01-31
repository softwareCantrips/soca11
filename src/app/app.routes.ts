import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { SubclassComponent } from './subclass/subclass.component';


export const routes: Routes = [
    {path: 'class/:id', component: ClassComponent, children: [{
        path: 'subs',
        component: SubclassComponent
    }]},
    {path: 'home', component: HomeComponent, data: { title: 'Select a Class' }},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
