import { Component } from '@angular/core';

@Component({
  selector: 'pic-load-form',
  templateUrl: './pic-load.component.html',
  styleUrls: ['./pic-load.component.css']
})
export class PictureLoadComponent {
  picture:Blob;
}
