import {Component} from 'angular2/core';
import {Moviequote} from '../moviequote';
import {FIREBASE_PROVIDERS, FirebaseObjectObservable, AngularFire} from 'angularfire2';

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
  private ref: FirebaseObjectObservable<Moviequote>;
  private subscription;

  constructor(private af:AngularFire) {}

  public open(key: string) {
    console.log(key);
    this.ref = this.af.database.object(`/quotes/${key}`);
    this.subscription = this.ref.subscribe(mq => this.mq = mq);
    this._show = true;
  }

  public saveQuote() {
    this.ref.update(this.mq);
    this._show = false;
    this.subscription.unsubscribe();
  }

  public close() {
    this._show = false;
    this.subscription.unsubscribe();
  }

}
