import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibraryService } from '../../../services/books.service';
import { BookModel } from '../../../services/library';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component(
{
    selector: 'app-edit-product',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './library-edit.html',
  styleUrl: './library-edit.css'
})

export class EditBookComponent
{
    form: FormGroup;
    id: number = 0;
    product: BookModel | null = null;

    constructor(private fb: FormBuilder,
        private service: LibraryService,
        private location: Location,
        private route: ActivatedRoute){}
    
    
}