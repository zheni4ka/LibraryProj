import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Router } from '@angular/router';
import { BookModel } from '../../../services/library';
import { LibraryService } from '../../../services/books.service';

@Component({
    selector: 'app-library-list',
    standalone: true,
    imports: [MatTableModule, MatIconModule, MatButtonModule],
    templateUrl: './library-list.component.html',
    styleUrl: './library-list.component.css'
  })

export class LibraryListComponent implements OnInit 
{
    displayedColumns: string[] = ["id", "name", "pageCount", "yearRelease"];
    books: BookModel[] = [];
    tableSource = new MatTableDataSource<BookModel>([]);

    constructor(private libraryService: LibraryService,
        public dialog: MatDialog,
        private router: Router) { }
        
    refreshTable() : void {
        this.tableSource.data = this.books;
    }

    openConfirmDialog() {
        return this.dialog.open(DeleteConfirmationDialogComponent);
      }
    
    onDelete(id: number): void
    {
        this.openConfirmDialog()
    }

    ngOnInit(): void {
        this.libraryService.getAll().subscribe(res => {
            this.books = res;
            this.refreshTable();
        });
    }

}