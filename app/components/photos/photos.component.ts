import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos!: Photo[];
  albumId!: Album["id"];

  constructor(private photosService: PhotosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params['albumId'];
    
    this.photosService.getPhotos(this.albumId).subscribe(data => {
      this.photos = data as Photo[];
    });
    
  }
}
