import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AddDialog} from './add-dialog/add-dialog';
import {EditDialog} from './edit-dialog/edit-dialog';
import {Moviequote} from './moviequote';

@Component({
  selector: 'movie-quotes-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/movie-quotes.html',
  styleUrls: ['app/movie-quotes.css'],
  directives: [ROUTER_DIRECTIVES, AddDialog, EditDialog],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class MovieQuotesApp {
  moviequote: Moviequote = new Moviequote();
  moviequotes: FirebaseListObservable<any[]>;
  editable: boolean = false;
  showJson: boolean = false;

  constructor(af: AngularFire) { this.moviequotes = af.database.list('/quotes'); }

  addQuote(mq: Moviequote) {
    console.log(mq);
    this.moviequotes.push(mq);
    this.moviequote = new Moviequote();
  }

  removeQuote(key: string) {
    this.moviequotes.remove(key);  
    this.editable = false;
  }

  editQuote(dialog: EditDialog, mq: Moviequote) {
    dialog.open(mq.$key); 
    this.editable = false;
  }

  show(dialog: AddDialog) {
    dialog.open();
  }

}
