import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'movie-quotes-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/movie-quotes.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class MovieQuotesApp {
  defaultMeaning: number = 42;
  moviequote: Moviequote = new Moviequote();
  moviequotes: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.moviequotes = af.list('/quotes');
  }

  addQuote() {
    this.moviequotes.add(this.moviequote);
    this.moviequote = new Moviequote();
  }

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

class Moviequote {

  public movie: String;
  public quote: String;

}
