import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { MusicService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css'],
})
export class ListAlbumsComponent implements OnInit {
  constructor(private service: MusicService) {}

  @Input() artist: Artist;
  albums: Album[];
  selectedAlbum: Album;

  ngOnInit() {
    this.service.getAlbums(this.artist.Name, (albums: Album[]) => {
      this.albums = albums;
      console.log(albums, '!!!!!!!!!!');
    });
  }

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}
