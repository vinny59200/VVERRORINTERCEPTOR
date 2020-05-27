import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VVERRORINTERCEPTOR';

  private apiurl = "http://www.omdbapi.com/?apikey=faa771bf";

  private badapiurl = "http://www.omdbapi.com/verybadurl";

  currentMovie: Movie = new Movie({ 'title': "", 'plot': "", 'picture': "" });

  constructor(private http: HttpClient) {
    this.refreshMovie();
  }

  getData(title: string) {
    return this.http.get(this.apiurl + "&t=" + title);
  }

  getDataWithBadURL(title: string) {
    return this.http.get(this.badapiurl + "&t=" + title);
  }

  refreshMovie(): void {
    this.getData(this.currentMovie.title).subscribe((data: any) => {
      this.currentMovie.title = data.Title;
      this.currentMovie.plot = data.Plot;
      this.currentMovie.picture = data.Poster;
    });
  }

  badRefreshMovie(): void {
    this.getDataWithBadURL(this.currentMovie.title).subscribe((data: any) => {
      this.currentMovie.title = data.Title;
      this.currentMovie.plot = data.Plot;
      this.currentMovie.picture = data.Poster;
    });
  }
}
