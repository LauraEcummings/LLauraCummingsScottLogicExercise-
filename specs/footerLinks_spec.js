//	Test Checking Home Page footer-wrapper links are present and go to correct url specification

var HomePageFooterWrapper = function() { 
      this.footerWrapper= element(by.id("footer-wrapper"));
      // left side 
      this.termslink = this.footerWrapper.all(by.css(".mr-3")).get(1);
      this.privacyLink = this.footerWrapper.all(by.css(".mr-3")).get(2);
      this.securityLink = this.footerWrapper.all(by.css(".mr-3")).get(3);
      this.statusLink = this.footerWrapper.all(by.css(".mr-3")).get(4);
      this.helpLink = this.footerWrapper.all(by.css(".mr-3")).get(5);
      // right side
      this.contactgithubLink = this.footerWrapper.all(by.css(".ml-3")).get(5);
      this.apiLink = this.footerWrapper.all(by.css(".ml-3")).get(4);
      this.trainingLink = this.footerWrapper.all(by.css(".ml-3")).get(3);
      this.shopLink = this.footerWrapper.all(by.css(".ml-3")).get(2);
      this.blogLink = this.footerWrapper.all(by.css(".ml-3")).get(1);
      this.aboutLink = this.footerWrapper.all(by.css(".ml-3")).get(0);
   };

describe('checks footer-wrapper links on https://github.community', function() {
   
   var homeFooterWrapper = new HomePageFooterWrapper();

   beforeEach(function() {
      browser.get('https://github.community');
   });

   it('should have a eleven links', function() {
      expect(homeFooterWrapper.termslink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.termslink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.privacyLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.privacyLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.securityLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.securityLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.statusLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.statusLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.helpLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.helpLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.contactgithubLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.contactgithubLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.apiLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.apiLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.trainingLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.trainingLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.shopLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.shopLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.blogLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.blogLink.isDisplayed()).toBe(false);
      expect(homeFooterWrapper.aboutLink.isDisplayed()).toBe(true);
      //expect(homeFooterWrapper.aboutLink.isDisplayed()).toBe(false);
   });
});

describe('checks footer-wrapper links on https://github.community go to correct destinations', function() {
   
   var homeFooterWrapper = new HomePageFooterWrapper();

   beforeEach(function() {
      browser.get('https://github.community');
   });
   
   it('check destination for termslink', function() {
      homeFooterWrapper.termslink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Terms of Service - GitHub Help');
   });

   it('check destination for securityLink', function() {
      homeFooterWrapper.securityLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Security · GitHub');
   });

   it('check destination for statusLink', function() {
      homeFooterWrapper.statusLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Status');
   });

   it('check destination for helpLink', function() {
      homeFooterWrapper.helpLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub.com Help Documentation');
   });

   it('check destination for contactgithubLink', function() {
      homeFooterWrapper.contactgithubLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Support');
   });

   it('check destination for apiLink', function() {
      homeFooterWrapper.apiLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Developer | GitHub Developer Guide');
   });

   it('check destination for trainingLink', function() {
      homeFooterWrapper.trainingLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Professional Services | From idea to implementation, our experts are ready to help your team get wherever you want to go. Start a conversation with us about how we can bring your goals to life.');
   });

   it('check destination for shopLink', function() {

      homeFooterWrapper.shopLink.click();
      expect(browser.driver.getTitle()).toEqual('GitHub Shop | Awesome GitHub T-shirts and other cool swag');
   });

   it('check destination for blogLink', function() {
      homeFooterWrapper.blogLink.click();
      expect(browser.driver.getTitle()).toEqual('The GitHub Blog - Updates, ideas, and inspiration from GitHub to help developers build and design software.');
   });

   it('check destination for aboutLink', function() {
      homeFooterWrapper.aboutLink.click();
      expect(browser.driver.getTitle()).toEqual('About · GitHub');
   });
});