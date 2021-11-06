import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/Artist';
import { MusicService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css'],
})
export class ListArtistsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: MusicService) {}

  selectedArtist: Artist;
  artists: Artist[];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Getting data....');
      this.service.getArtists((artists: Artist[]) => {
        this.artists = artists;
        this.selectedArtist = null;
      });
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}
