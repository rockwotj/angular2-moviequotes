import {Component, ElementRef, Output, EventEmitter} from 'angular2/core';
import {Moviequote} from '../moviequote';


@Component({
  selector: 'add-dialog',
  templateUrl: 'app/add-dialog/add-dialog.html',
  styleUrls: ['app/add-dialog/add-dialog.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class AddDialog {

  private _show: boolean = false;
  private mq: Moviequote = new Moviequote();
  @Output("quoteAdded") emitter: EventEmitter<Moviequote> = new EventEmitter();

  constructor(element: ElementRef) {
    element.nativeElement.show = this.open;
  }

  public open() {
    this._show = true;
  }

  private createQuote() {
    this.emitter.emit(this.mq);
    this.mq = new Moviequote();
    this.close();
  }

  public close() {
    this._show = false;
  }

}
