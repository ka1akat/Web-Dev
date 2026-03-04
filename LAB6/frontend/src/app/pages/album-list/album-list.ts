import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-list.html',
  styleUrls: ['./album-list.css'],
})
export class AlbumList implements OnInit {

  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.log('Albums ERROR:', err);
        this.error = 'Не получилось загрузить альбомы';
        this.loading = false;
      },
    });
  }
  deleteAlbum(id: number): void {
    this.albums = this.albums.filter(a => a.id !== id);
  }
}
