import { CreditAlertPage } from './app.po';

describe('credit-alert App', () => {
  let page: CreditAlertPage;

  beforeEach(() => {
    page = new CreditAlertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
