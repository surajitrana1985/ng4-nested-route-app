import { Ng4NestedRouteAppPage } from './app.po';

describe('ng4-nested-route-app App', () => {
  let page: Ng4NestedRouteAppPage;

  beforeEach(() => {
    page = new Ng4NestedRouteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
