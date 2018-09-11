import { ProjectSPAPage } from './app.po';

describe('project-spa App', () => {
  let page: ProjectSPAPage;

  beforeEach(() => {
    page = new ProjectSPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
