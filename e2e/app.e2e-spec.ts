import { LunchOrderAppPage } from './app.po';

describe('lunch-order-app App', () => {
  let page: LunchOrderAppPage;

  beforeEach(() => {
    page = new LunchOrderAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
