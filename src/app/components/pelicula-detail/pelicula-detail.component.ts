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
      },
      error => {
        console.log(error);
    });
  }
}
