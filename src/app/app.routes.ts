import { Routes } from '@angular/router';
import { HomeComponent } from './home/home-component';
import { LibraryListComponent } from './library/library-list/library-list/library-list.component';
import { AddBookComponent } from './library/library-list/library-add/library-add'; 
import { EditBookComponent } from './library/library-list/library-edit/library-edit';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "library", component: LibraryListComponent },
    { path: "add", component: AddBookComponent },
    { path: "edit/:id", component: EditBookComponent},
];
