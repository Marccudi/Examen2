import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/models/Movies.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {


  baseUrlp1 = 'https://api.themoviedb.org/3/movie/';
  baseUrlp2 = '?api_key=fb4e2111a7042ca52ce47c96e093533b';

  currentMov: Movies = {
    id:'',
    original_title:'',
    overview:'',
    poster_path:'',
    release_date:'',
    title:''
  };

  constructor(private route :ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getPelicula(this.route.snapshot.params['id']);
  }

  getPelicula(id: string):void{
    this.movieService.get(id)
    .subscribe(
      data => {
        this.currentMov = data;
        console.log(this.currentMov);
      },
      error => {
        console.log(error);
    });
  }
}
