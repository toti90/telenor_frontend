import { HomePage } from './home.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display header with two icons', () => {
    page.navigateTo();
    expect(page.getHeader().isPresent()).toBe(true);
    expect(page.getToucanLogo().isPresent()).toBe(true);
    expect(page.getShoppingCartLogo().isPresent()).toBe(true);
    // expect(page.getShoppingCartBadge().isPresent()).toBe(false);
  });

  it('should display filters after click on sidenav', () => {
    page.navigateTo();
    expect(page.getFilterField().isPresent()).toBe(false);
    expect(page.getSideNav().isPresent()).toBe(true);
    expect(page.getFirstNodeOfSideNavText()).toEqual('Nokia');
    page.getFirstNodeOfSideNav().click();
    browser.waitForAngular();
    expect(page.getFilterField().isPresent()).toBe(true);
  });

  it('should display phones starting with Nokia, check card structure', () => {
    page.navigateTo();
    expect(page.getAllPhoneCards().count()).toEqual(15);
    expect(page.getFirstPhoneImage().isPresent()).toBe(true);
    expect(page.getFirstPhoneNameText()).toEqual('Nokia 6630');
    expect(page.getFirstPhonePriceText()).toEqual('34.900 Ft');
    expect(page.getFirstPhoneCartButton().isPresent()).toBe(true);
    expect(page.getFirstPhoneDescButton().isPresent()).toBe(true);
    expect(page.getFirstPhoneDescButtonText()).toEqual('View description');
  });

  xit('should add phone to cart and increase badge number', () => {
    page.navigateTo();
    expect(page.getShoppingCartBadge().isPresent()).toBe(false);
    page.getFirstPhoneCartButton().click();
    browser.waitForAngular();
    expect(page.getShoppingCartBadge().isPresent()).toBe(true);
    expect(page.getShoppingCartBadgeText()).toEqual('1');
    page.getFirstPhoneCartButton().click();
    browser.waitForAngular();
    expect(page.getShoppingCartBadgeText()).toEqual('2');
  });

  it('should navigate to description by clicking on button', () => {
    page.navigateTo();
    page.getFirstPhoneDescButton().click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
    // expect(page.getSideNav().isPresent()).toBe(false);
    expect(page.getHeader().isPresent()).toBe(true);
    expect(page.getAllPhoneCards().count()).toEqual(1);
    expect(page.getAllThumbnailButtons().count()).toEqual(3);
    expect(page.getFirstDescriptionText()).toEqual('Released: 2004');
    // expect(page.getShoppingCartBadge().isPresent()).toBe(false);
    page.getDescAddCartButton().click();
    browser.waitForAngular();
    expect(page.getShoppingCartBadge().isPresent()).toBe(true);
    // expect(page.getShoppingCartBadgeText()).toEqual('1');
    // page.getDescBackToMainButton().click(); //itt mi történik??
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
    expect(page.getSideNav().isPresent()).toBe(true);
    expect(page.getHeader().isPresent()).toBe(true);
    // expect(page.getAllPhoneCards().count()).toEqual(15);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
