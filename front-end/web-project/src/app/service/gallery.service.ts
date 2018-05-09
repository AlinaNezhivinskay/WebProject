import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GalleryService {

  private galleryUrl = '';  

  constructor(
    private http: HttpClient) { }

  /** GET perfumes from the server */
  getPictures (): Observable<Object[]> {
     const url = this.galleryUrl+'/all';
    return this.http.get<Object[]>(url);
  }

   /** GET perfumes from the server */
  getPicture (id:number): Observable<Object> {
     const url = this.galleryUrl+'/find?id='+id;
    return this.http.get<Object>(url);
  }

   /** POST: add a new perfume to the server */
  addPicture (image: Object): Observable<Object> {
    const url = this.galleryUrl+'/new';
    return this.http.post<Object>(url, image, httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
}