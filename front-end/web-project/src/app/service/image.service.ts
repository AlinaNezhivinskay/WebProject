import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import  { Picture } from '../entities/picture';
import  { Image } from '../entities/image';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ImageService {

  private imageUrl = 'http://localhost:8999';

  constructor(
    private http: HttpClient) { }

     /** POST: add a new perfume to the server */
  sendPicture (picture: Picture): Observable<Image> {
    const url = this.imageUrl+'/picture';
    return this.http.post<Image>(url, JSON.stringify(picture), httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
}