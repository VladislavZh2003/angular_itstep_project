import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];// = []

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
    });
  }
}
