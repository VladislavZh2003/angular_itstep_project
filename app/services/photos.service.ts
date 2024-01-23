import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos( albumId: Album["id"]){//getPhotos(albumId: number): Observable<Photo[]>
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }
}
