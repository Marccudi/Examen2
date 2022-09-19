import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/models/Series.model';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  baseUrlp1 = 'https://api.themoviedb.org/3/tv/';
  baseUrlp2 = '?api_key=fb4e2111a7042ca52ce47c96e093533b';

  currentSer: Series = {
    id:'',
    original_name:'',
    overview:'',
    poster_path:'',
    first_air_date:'',
    name:'',
  };
  constructor(private route :ActivatedRoute, private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.getSerie(this.route.snapshot.params['id']);
  }

  getSerie(id: string):void{
    this.serieService.get(id)
    .subscribe(
      data => {
        this.currentSer = data;
        console.log(this.currentSer);
      },
      error => {
        console.log(error);
    });
  }
}
