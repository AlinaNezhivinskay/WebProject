import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
	form: any = {};
 	@ViewChild("image")
	image: any;

	public imageChoosed(event:any){
		let reader  = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
	reader.onloadend = (e) => {
	this.image.nativeElement.src=reader.result;
	}
	}
	submit() {
        let final_data;
        if (this.image) {
            let image: FileList = this.image;
            const formData = new FormData();
            for (let i = 0; i < image.length; i++) {
                formData.append('photo', image[i]);
            }
            formData.append('data', JSON.stringify(this.form));
            
            final_data = formData;
        } else {
            //Если нет файла, то слать как обычный JSON
            final_data = this.form;
        }
       // this.http.post('/api/form', final_data).map((response: Response) => response.json()).subscribe(resp => {})
    }
}

