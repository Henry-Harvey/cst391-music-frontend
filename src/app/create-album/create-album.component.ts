import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { MusicService } from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
  title = '';
  artist = '';
  description = '';
  year = '';

  selectedImage = '';
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

  constructor(private service: MusicService) {}

  ngOnInit(): void {}

  reset() {
    console.log('Resetting info');
    this.title = '';
    this.artist = '';
    this.description = '';
    this.year = '';
    this.selectedImage = '';
  }

  onSubmit() {
    console.log('this.title', this.title);
    console.log('this.artist', this.artist);
    console.log('this.description', this.description);
    console.log('this.year', this.year);
    console.log('this.selectedImage', this.selectedImage);

    this.service.createAlbum(
      new Album(
        -1,
        this.title,
        this.artist,
        this.description,
        parseInt(this.year),
        this.selectedImage,
        null
      ),
      null
    );
  }
}
