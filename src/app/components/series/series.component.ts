import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { Series } from 'src/app/models/Series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
