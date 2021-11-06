import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';
import { MusicService } from '../service/music-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.css'],
})
export class DeleteAlbumComponent implements OnInit {
  album: Album;

  constructor(
    private service: MusicService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.service.getAlbum(
      this.route.snapshot.paramMap.get('artist'),
      parseInt(this.route.snapshot.paramMap.get('id')),
      (album: Album) => {
        this.album = album;
      }
    );
  }

  onSubmit() {
    this.service.deleteAlbum(this.album.Id, this.album.Artist, null);
  }

  cancel() {
    this._location.back();
  }
}
