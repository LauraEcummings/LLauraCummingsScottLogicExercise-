//Test Checking Home Page Top-Nav links are present and go to correct url specification

var HomePageHeaderWrapper = function() { 
  this.headerWrapperLinks= element(by.id("header-wrapper"));

//homepage header-wrapper links
  this.homePageLink = this.headerWrapperLinks.all(by.tagName("a")).get(0);
  this.conversationsLink = this.headerWrapperLinks.all(by.css(".nav-link")).get(0);
  this.originalSeriesLink = this.headerWrapperLinks.all(by.css(".nav-link")).get(1);
  this.backToGitHub = this.headerWrapperLinks.all(by.css(".nav-link")).get(2);
};

describe('https://github.community', function() {
var homePageHeaderWrapper = new HomePageHeaderWrapper();

  beforeEach(function() {
     browser.get('https://github.community'); //resets the browser after each test
  });
  
    //commmneted out tests can be run to double check results
  it('check destination for homePageLink', function() {
  	expect(homePageHeaderWrapper.homePageLink.isDisplayed()).toBe(true);
    //expect(homePageHeaderWrapper.homePageLink.isDisplayed()).toBe(false);
    homePageHeaderWrapper.homePageLink.click();
    //checking current title test
    expect(browser.driver.getTitle()).toEqual('Home - GitHub Community Forum'); //useing .driver to proform text ensures that is the webside is none-angular enabled, it will not cause Synchronizatio error
    //another way of doing test would be to check current url
    expect(browser.driver.getCurrentUrl()).toEqual("https://github.community/");
  });
    
  it('check destination for conversationsLink', function() {
    expect(homePageHeaderWrapper.conversationsLink.isDisplayed()).toBe(true);
    //expect(homePageHeaderWrapper.conversationsLink.isDisplayed()).toBe(false);
    homePageHeaderWrapper.conversationsLink.click();
    expect(browser.driver.getTitle()).toEqual('Conversations - GitHub Community Forum');
  });
  
  it('check destination for originalSeriesLink', function() {
    expect(homePageHeaderWrapper.originalSeriesLink.isDisplayed()).toBe(true);
    //expect(homePageHeaderWrapper.originalSeriesLink.isDisplayed()).toBe(false);
    homePageHeaderWrapper.originalSeriesLink.click();
    expect(browser.driver.getTitle()).toEqual('GitHub Original Series - GitHub Community Forum');
  });
  
  it('check destination for backToGitHub', function() {
    expect(homePageHeaderWrapper.backToGitHub.isDisplayed()).toBe(true);
    //expect(homePageHeaderWrapper.backToGitHub.isDisplayed()).toBe(false);
    homePageHeaderWrapper.backToGitHub.click();
    expect(browser.driver.getTitle()).toEqual('The world’s leading software development platform · GitHub');
  });

});