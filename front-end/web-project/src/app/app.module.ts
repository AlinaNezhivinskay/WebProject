import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { MainComponent }         from './main/main.component';
import { ChatComponent }         from './chat/chat.component';
import { GalleryComponent }   from './gallery/gallery.component';

import { ChatService } from './service/chat.service';
import { GalleryService } from './service/gallery.service';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChatComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule
  ],
  providers: [ChatService,GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
