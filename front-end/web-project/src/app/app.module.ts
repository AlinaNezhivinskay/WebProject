import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { MainComponent }         from './main/main.component';
import { GalleryComponent }   from './gallery/gallery.component';

import { GalleryService } from './service/gallery.service';
import { ImageService } from './service/image.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GalleryService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
