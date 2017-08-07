import { OnePage } from './app.po';

describe('one App', () => {
  let page: OnePage;

  beforeEach(() => {
    page = new OnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
