import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LibraryService } from "../../../services/books.service";
import { CreateBookModel, BookModel } from "../../../services/library";

@Component({
    selector: 'app-add-book',
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
    templateUrl: './library-add.html',
    styleUrl: './library-add.css'
  })

export class AddBookComponent implements OnInit
{
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private service: LibraryService,
        private location: Location) {
    
        this.form = this.fb.group({
          name: ['', Validators.required],
          description: ['', Validators.minLength(10)],
          pageCount: [Validators.min(1)],
          image: [null, Validators.required]
        });
    }
    ngOnInit(): void {
        
    }

    onSubmit(): void {
        if (!this.form.valid) {
          alert("Invalid data!")
          return;
        }
        const item = this.form.value as CreateBookModel;
        this.service.create(item).subscribe(res => {
          console.log(res);
          this.location.back();
        });
      }

      onFileSelected(event: any) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
      }
}