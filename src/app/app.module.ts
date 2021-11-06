import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopOverComponent } from './pop-over/pop-over.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListArtistsComponent,
    ListAlbumsComponent,
    CreateAlbumComponent,
    DisplayAlbumComponent,
    EditAlbumComponent,
    DeleteAlbumComponent,
    PopOverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
