import { XoresearchTestPage } from './app.po';

describe('xoresearch-test App', function() {
  let page: XoresearchTestPage;

  beforeEach(() => {
    page = new XoresearchTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
