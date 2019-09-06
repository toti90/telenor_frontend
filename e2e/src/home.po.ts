import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getHeader() {
    return element(by.css('app-header'));
  }

  getToucanLogo() {
    return element(by.css('.logo'));
  }

  getShoppingCartLogo() {
    return element(by.css('.fa-shopping-basket'));
  }

  getShoppingCartBadge() {
    return element(by.css('.header .badge'));
  }

  getShoppingCartBadgeText() {
    return this.getShoppingCartBadge().getText();
  }

  getFilterField() {
    return element(by.css('.list-items app-filters'));
  }

  getSideNav() {
    return element(by.css('.main app-sidebar'));
  }

  getFirstNodeOfSideNav() {
    return this.getSideNav().element(by.css('ul nz-tree-node:first-child'));
  }

  getFirstNodeOfSideNavText() {
    return this.getFirstNodeOfSideNav().getText();
  }

  getAllPhoneCards() {
    return element.all(by.css('.card'));
  }

  getFirstPhoneCard() {
    return element(by.css('.card:first-child'));
  }

  getFirstPhoneImage() {
    return this.getFirstPhoneCard().element(by.css('.card-img-top'));
  }

  getFirstPhoneNameText() {
    return this.getFirstPhoneCard().element(by.css('.card-body .card-title')).getText();
  }

  getFirstPhonePriceText() {
    return this.getFirstPhoneCard().element(by.css('.card-body .card-text')).getText();
  }

  getFirstPhoneCartButton() {
    return this.getFirstPhoneCard().element(by.css('.cart .fa-cart-plus'));
  }

  getFirstPhoneDescButton() {
    return this.getFirstPhoneCard().element(by.css('.card-body .btn'));
  }

  getFirstPhoneDescButtonText() {
    return this.getFirstPhoneCard().element(by.css('.card-body .btn')).getText();
  }

  getDescThumbnailsSection() {
    return this.getFirstPhoneCard().element(by.css('.imageAndDesc .thumbnails'));
  }

  getAllThumbnailButtons() {
    return this.getDescThumbnailsSection().all(by.css('.btn'));
  }

  getFirstDescriptionText() {
    return this.getFirstPhoneCard().element(by.css('.description p:first-child')).getText();
  }

  getLastDescriptionText() {
    return this.getFirstPhoneCard().element(by.css('.description p')).get(3).getText();
  }

  getDescAddCartButton() {
    return this.getFirstPhoneCard().element(by.css('.description .btn-success'));
  }

  getDescBackToMainButton() {
    return this.getFirstPhoneCard().element(by.css('.description .btn-outline-success'));
  }
}
