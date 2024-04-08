import { Injectable } from '@angular/core';
import { BookModel, CreateBookModel} from './library';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://localhost:7206/api/books/"

@Injectable({
  providedIn: 'root'
})

export class LibraryService {
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<BookModel[]> {
      return this.http.get<BookModel[]>(api);
    }
  
    get(id: number): Observable<BookModel> {
      return this.http.get<BookModel>(api + id);
    }
  
    edit(model: BookModel): Observable<any> {
      return this.http.put<BookModel>(api, model); // [FromBody]
    }
  
    create(item: CreateBookModel): Observable<any> {
      console.log("Creating product:", item);
  
      const formData = new FormData();
  
      for (const key in item) {
        formData.append(key, item[key as keyof CreateBookModel] as string | Blob);
      }
  
      const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
      return this.http.post(api, formData, { headers: headers }); 
    }
  
    delete(id: number): Observable<any> {
      console.log("Deleting product id: " + id);
      return this.http.delete(api + id);
    }
  }