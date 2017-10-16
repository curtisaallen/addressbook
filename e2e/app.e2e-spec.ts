import { AddressbookPage } from './app.po';

describe('addressbook App', () => {
  let page: AddressbookPage;

  beforeEach(() => {
    page = new AddressbookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
