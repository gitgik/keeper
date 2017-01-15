import { KeeperPage } from './app.po';

describe('keeper App', function() {
  let page: KeeperPage;

  beforeEach(() => {
    page = new KeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
