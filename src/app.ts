import {bootstrap} from 'angular2/platform/browser';
import {MovieQuotesApp} from './app/movie-quotes';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap(MovieQuotesApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase("https://rockwotj-moviequotes.firebaseio.com/"),
  ROUTER_PROVIDERS
]);
