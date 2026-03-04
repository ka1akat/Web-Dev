import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {About} from './pages/about/about';
import {AlbumList} from './pages/album-list/album-list';
import {AlbumsDetail} from './pages/albums-detail/albums-detail';
import {AlbumPhotos} from './pages/album-photos/album-photos';

export const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path :'home', component : Home},
  {path: 'about', component : About},
  {path:'albums', component : AlbumList},
  {path:'albums/:id/photos', component : AlbumPhotos},
  {path:'albums/:id', component : AlbumsDetail},
  {path:'**',redirectTo: 'home'}
];
