import { OutputPage } from './app.po';

describe('output App', () => {
  let page: OutputPage;

  beforeEach(() => {
    page = new OutputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
