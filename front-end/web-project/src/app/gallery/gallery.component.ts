import { Component } from '@angular/core';

import { GalleryService } from '../service/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
   pictures:Object[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getGallery();
  }

  getGallery(): void {
    this.galleryService.getPictures()
    .subscribe(pictures => this.pictures = pictures);
  }
}
