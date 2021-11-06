import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';
import { MusicService } from '../service/music-service.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
})
export class EditAlbumComponent implements OnInit {
  album: Album = null;

  images: string[] = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
  ];

  constructor(private service: MusicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getAlbum(
      this.route.snapshot.paramMap.get('artist'),
      parseInt(this.route.snapshot.paramMap.get('id')),
      (album: Album) => {
        this.album = album;
      }
    );
  }

  reset() {
    console.log('Resetting info');
    this.service.getAlbum(
      this.route.snapshot.paramMap.get('artist'),
      parseInt(this.route.snapshot.paramMap.get('id')),
      (album: Album) => {
        this.album = album;
      }
    );
  }

  onSubmit() {
    this.service.updateAlbum(this.album, null);
  }
}
