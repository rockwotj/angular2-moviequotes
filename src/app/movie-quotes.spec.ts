import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {MovieQuotesApp} from '../app/movie-quotes';

beforeEachProviders(() => [MovieQuotesApp]);

describe('App: MovieQuotes', () => {
  it('should have the `defaultMeaning` as 42',
     inject([MovieQuotesApp], (app: MovieQuotesApp) => { expect(app.defaultMeaning).toBe(42); }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([MovieQuotesApp], (app: MovieQuotesApp) => {
         expect(app.meaningOfLife()).toBe('The meaning of life is 42');
         expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
       }));
  });
});
