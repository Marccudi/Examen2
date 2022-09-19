import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/models/Movies.model';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  Movies?: Movies[];
  currentMovie: Movies = {};
  currentIndex = -1;
  title = '';

  constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    this.retrieveMovies();
  }

  retrieveMovies(): void {
    this.MovieService.getAll().subscribe(
      (data) => {
        this.Movies = data;
        console.log(data);
      },
      (error) => {
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

    this.MovieService.findByTitle(this.title)
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
