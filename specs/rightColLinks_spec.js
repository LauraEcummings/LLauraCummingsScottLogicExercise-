//	Test Checking Home Page right column links are present and go to correct url specification

var HomeRightColLinks = function() { 
      this.rightColLinks = element(by.css(".lia-welcome.lia-component-common-widget-welcome"));

      this.gettingStartedLink = this.rightColLinks.all(by.tagName("a")).get(0);
      this.codeOfConductLink = this.rightColLinks.all(by.tagName("a")).get(1);
      this.boardDirectorylink = this.rightColLinks.all(by.tagName("a")).get(2);
      this.otherPlacesToLearnAboutGithub = this.rightColLinks.all(by.tagName("a")).get(3);
      this.otherPlacesToGetHelp = this.rightColLinks.all(by.tagName("a")).get(4);
   };

describe('checks right column links on https://github.community', function() {
   
   var homeRightColLinks = new HomeRightColLinks();

	beforeEach(function() {
         browser.get('https://github.community');
	});

         it('should have four links', function() {
         expect(homeRightColLinks.gettingStartedLink.isDisplayed()).toBe(true);
         //expect(homePageLeftCol.gettingStartedLink.isDisplayed()).toBe(false);
         expect(homeRightColLinks.codeOfConductLink.isDisplayed()).toBe(true);
         //expect(homePageLeftCol.codeOfConductLink.isDisplayed()).toBe(false);
         expect(homeRightColLinks.boardDirectorylink.isDisplayed()).toBe(true);
         //expect(homePageLeftCol.boardDirectorylink.isDisplayed()).toBe(false);
         expect(homeRightColLinks.otherPlacesToLearnAboutGithub.isDisplayed()).toBe(true);
         //expect(homePageLeftCol.otherPlacesToLearnAboutGithub.isDisplayed()).toBe(false);
         expect(homeRightColLinks.otherPlacesToGetHelp.isDisplayed()).toBe(true);
         //expect(homePageLeftCol.otherPlacesToGetHelp.isDisplayed()).toBe(false);
   });

describe('checks right column links on https://github.community go to correct destinations', function() {

   var homeRightColLinks = new HomeRightColLinks();

   beforeEach(function() {
         browser.get('https://github.community');
   });
  
   it('check destination for gettingStartedLink', function() {
         homeRightColLinks.gettingStartedLink.click();
         expect(browser.getTitle()).toEqual('Getting started with the GitHub Community Forum - GitHub Community Forum');
   });

   it('check destination for codeOfConductLink', function() {
         homeRightColLinks.codeOfConductLink.click();
         expect(browser.getTitle()).toEqual('Getting started with the GitHub Community Forum - GitHub Community Forum');
   });

   it('check destination for boardDirectorylink', function() {
         homeRightColLinks.boardDirectorylink.click();
         expect(browser.getTitle()).toEqual('Getting started with the GitHub Community Forum - GitHub Community Forum');
   });

   it('check destination for otherPlacesToLearnAboutGithub', function() {
         homeRightColLinks.otherPlacesToLearnAboutGithub.click();
         expect(browser.getTitle()).toEqual('Getting started with the GitHub Community Forum - GitHub Community Forum');
   });

   it('check destination for otherPlacesToGetHelp', function() {
      homeRightColLinks.otherPlacesToGetHelp.click();
      expect(browser.getTitle()).toEqual('Getting started with the GitHub Community Forum - GitHub Community Forum');
   });

});
});