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
  Series?: any;
  currentSerie: Series = {};
  currentIndex = -1;
  name = '';

  constructor(private SerieService: SerieService) {}

  ngOnInit(): void {
    this.retrieveSeries();
  }

  retrieveSeries(): void {
    this.SerieService.getAll().subscribe(
      result => {
        this.Series = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.retrieveSeries();
    this.currentSerie={};
    this.currentIndex=-1;
  }

  setActiveChar(char:Series, index:number):void {
    this.currentSerie=char;
    this.currentIndex=index;
  }

  searchName():void {
    this.currentSerie ={}
    this.currentIndex =-1

    this.SerieService.findByName(this.name)
    .subscribe(
      data => {
        console.log(data);
        this.Series=data;

      },
      error => {
        console.log(error);
      });
  }

}
