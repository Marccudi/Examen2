import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import {PeliculaDetailComponent} from './components/pelicula-detail/pelicula-detail.component';
import {SerieDetailComponent} from './components/serie-detail/serie-detail.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'movies',
    component:PeliculasComponent
  },{
    path:'series',
    component:SeriesComponent
  },{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path:'movies/:id',
    component:PeliculaDetailComponent

  },{
    path:'series/:id',
    component:SerieDetailComponent
  },{
    path:'login',
    component:LoginComponent
  }
  // {
  //   path:'register',
  //   component:RegisterComponent
  // },{
  //   path:'profile',
  //   component:ProfileComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
