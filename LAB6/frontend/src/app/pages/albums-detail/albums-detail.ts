import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums-detail.html',
  styleUrls: ['./albums-detail.css'],
})
export class AlbumsDetail implements OnInit {
  album: Album | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = '';

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Album id from route:', id);

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        console.log('Album loaded:', data);
        this.album = data;
        this.loading = false;
      },
      error: (err) => {
        console.log('Album ERROR:', err);
        this.error = 'Не получилось загрузить альбом';
        this.loading = false;
      },
    });
  }
}
