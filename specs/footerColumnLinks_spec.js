//Test Checking Home Page Footer Column Links are present specification
//Like footerLinks_spec headerLinks_spec and rightColLinks_spec it would be easy to expand this one to 
//check the destination of the url on the link is correct.

var HomeFooterColumnLinks = function() { 
  this.homeFooterColumns = element(by.css(".lia-quilt-row.lia-quilt-row-row_1"));
    // Other ways to get help column
    this.otherWaysCol = this.homeFooterColumns.all(by.css(".help-links-container.border-top.clearfix"));
      this.gitHubHelpLink = this.otherWaysCol.all(by.tagName("a")).get(0);
      this.contactgithubLink = this.otherWaysCol.all(by.tagName("a")).get(1);
      this.twitterGitHubHelpLink = this.otherWaysCol.all(by.tagName("a")).get(2);
      this.gitHubEnterpriseLink = this.otherWaysCol.all(by.tagName("a")).get(3);
    // More places to learn column
    this.morePlacesColInfo = this.homeFooterColumns.all(by.css(".resources-list-left.mt-3"));
      this.gitHubLearningLabLink = this.morePlacesColInfo.all(by.tagName("a")).get(0);
      this.gitHubProfessionalServicesLink = this.morePlacesColInfo.all(by.tagName("a")).get(1);
      this.gitHubGuidesLink = this.morePlacesColInfo.all(by.tagName("a")).get(2);
      this.openSourceGuidesLink = this.morePlacesColInfo.all(by.tagName("a")).get(3);
    this.morePlacesColBlogs = this.homeFooterColumns.all(by.css(".resources-list-right.mt-3"));
      this.gitHubLink = this.morePlacesColBlogs.all(by.tagName("a")).get(0);
      this.atomLink = this.morePlacesColBlogs.all(by.tagName("a")).get(1);
      this.electronLink = this.morePlacesColBlogs.all(by.tagName("a")).get(2);
      this.gitHubApiLink= this.morePlacesColBlogs.all(by.tagName("a")).get(3);
    // Community areas column
    this.communityAreas = this.homeFooterColumns.all(by.css(".border-top.pt-4.clearfix"));
      this.atomCommunityLink = this.communityAreas.all(by.tagName("a")).get(0);
      this.gitHubEducationCommunityLink = this.communityAreas.all(by.tagName("a")).get(1);
      this.openSourceMaintainersGitHubLink = this.communityAreas.all(by.tagName("a")).get(2);
};

describe('checks footer columns links on https://github.community', function() {

  var homeFooterColumnLinks = new HomeFooterColumnLinks();

  beforeEach(function() {
     browser.get('https://github.community');
  });

  it('column titled Other ways to get help column has four links', function() {
    expect(homeFooterColumnLinks.gitHubHelpLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubHelpLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.contactgithubLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.contactgithubLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.twitterGitHubHelpLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.twitterGitHubHelpLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.gitHubEnterpriseLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubEnterpriseLink.isDisplayed()).toBe(false);
  });


  it('column titled more places to learn has eight links', function() {
    expect(homeFooterColumnLinks.gitHubLearningLabLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubLearningLabLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.gitHubProfessionalServicesLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubProfessionalServicesLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.gitHubGuidesLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubGuidesLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.openSourceGuidesLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.openSourceGuidesLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.gitHubLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.atomLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.atomLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.electronLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.electronLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.gitHubApiLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubApiLink.isDisplayed()).toBe(false);
  });

  it('column titled community areas has three links', function() {
    expect(homeFooterColumnLinks.atomCommunityLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.atomCommunityLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.gitHubEducationCommunityLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.gitHubEducationCommunityLink.isDisplayed()).toBe(false);
    expect(homeFooterColumnLinks.openSourceMaintainersGitHubLink.isDisplayed()).toBe(true);
    //expect(homeFooterColumnLinks.openSourceMaintainersGitHubLink.isDisplayed()).toBe(false);
  });

});