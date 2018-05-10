import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import  { Picture } from '../entities/picture';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 	@ViewChild("image")
	image: any;


  gettedImage:String;

	public imageChoosed(event:any){
		let reader  = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
	reader.onloadend = (e) => {
	this.image.nativeElement.src=reader.result;
	}
	}
	sendImage() {

  }
}

