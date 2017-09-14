import { KpAngular4Page } from './app.po';

describe('kp-angular4 App', () => {
  let page: KpAngular4Page;

  beforeEach(() => {
    page = new KpAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
