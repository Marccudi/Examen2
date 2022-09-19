import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/models/Movies.model';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  Movies?: any;
  currentMovie: Movies = {};
  currentIndex = -1;
  name = '';
  constructor( private movieServ: MovieService) { }

  ngOnInit(): void {
    this.retrieveMovies();
  }
  retrieveMovies():void {
    this.movieServ.getAll().subscribe(
      result => {
        this.Movies = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.retrieveMovies();
    this.currentMovie={};
    this.currentIndex=-1;
  }

  setActiveChar(char:Movies, index:number):void {
    this.currentMovie=char;
    this.currentIndex=index;
  }



  searchName():void {
    this.currentMovie ={}
    this.currentIndex =-1

    this.movieServ.findByTitle(this.name)
    .subscribe(
      data => {
        console.log(data);
        this.Movies=data;

      },
      error => {
        console.log(error);
      });
  }

}
