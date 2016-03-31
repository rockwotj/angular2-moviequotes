import {Component} from 'angular2/core';
import {Moviequote} from '../moviequote';

@Component({
  selector: 'edit-dialog',
  templateUrl: 'app/edit-dialog/edit-dialog.html',
  styleUrls: ['app/edit-dialog/edit-dialog.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class EditDialog {

  private _show: boolean = false;
  private mq: Moviequote = new Moviequote();
  private ref: Firebase;

  constructor() {
  }

  public open(mq: Moviequote) {
    this.ref = new Firebase(`https://rockwotj-moviequotes.firebaseio.com/quotes/${mq.$key}`);
    this.mq = new Moviequote();
    this.mq.quote = mq.quote;
    this.mq.movie = mq.movie;
    this._show = true;
  }

  public saveQuote() {
    this.ref.set({
      movie: this.mq.movie,
      quote: this.mq.quote
    });
    this._show = false;
  }

  public close() {
    this._show = false;
  }

}
