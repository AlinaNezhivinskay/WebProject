import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import {ImageService} from '../service/image.service';

import  { Picture } from '../entities/picture';
import  { Image } from '../entities/image';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 	@ViewChild("image")
	image: any;

  picture:Picture=new Picture();

  resultImage:Image=new Image();

 constructor(
    private imageService:ImageService
  ) {}

	public imageChoosed(event:any){
		 let file=event.target.files[0];
    let reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
    this.image.nativeElement.src=reader.result;
    this.handleFileSelect(file);
    this.picture.y= this.image.nativeElement.naturalHeight;
    this.picture.x= this.image.nativeElement.naturalWidth;
    this.picture.settings.x=this.image.nativeElement.naturalWidth;
    this.picture.settings.y=this.image.nativeElement.naturalHeight;
	}
	}

  handleFileSelect(file){
    var reader = new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
       
  }
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
     this.picture.image= btoa(binaryString);
    }

	sendPicture() {
    this.imageService.sendPicture(this.picture).subscribe(i=>this.resultImage=i);
  }

  /*MyController($scope, download) {
    $scope.downloadImage = function(img) {
        download.fromDataURL(this.getImageDataURL(img), "download.png");
    }
}
 
// Create a dataURL from an img element
    getImageDataURL(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
 
    // Copy the image contents to the canvas
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
 
    return canvas.toDataURL("image/png");
}*/
}

