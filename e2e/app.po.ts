export class MovieQuotesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('movie-quotes-app p')).getText();
  }
}
