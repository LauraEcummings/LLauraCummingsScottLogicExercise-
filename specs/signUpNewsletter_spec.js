//	Test Sign up newsletter specification 

//A simplar test like this can be used to test sign up and login features but I would need some
//login details in order to carry out that test.
 
describe('Signup form submission', function () {
  this.signUpForm = element(by.css(".content__formFields"));
 
  var email = this.signUpForm.all(by.name('EMAIL'));
  var fName = this.signUpForm.all(by.name('FNAME'));
  var lName = this.signUpForm.all(by.name('LNAME'));
  var subscribeButton = this.signUpForm.all(by.css('.button'));

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.driver.get('https://mailchi.mp/github/communityforumlist');
  });

  afterEach(function () {
    browser.ignoreSynchronization = false;
  });
 
  it('should have a title', function() {
    browser.get('https://mailchi.mp/github/communityforumlist');
    expect(browser.getTitle()).toEqual('Community Forum Newsletter Sign up');
  });

  // x before it tells protractor to ingore test
  xit('enter details into signup from and click submit', function() {
    //Have tested with own email and works.
    //This test will not work with the current input. Would need a real email to use or
    //if this was a webite Scott Logic was testing I would expect we have input that would be used for testing.

    email.sendKeys('test@test.com');
    fName.sendKeys('test');
    lName.sendKeys('test');
    subscribeButton.click();

    expect(element(by.css('.signup-success')).getText()).toContain('Success! been added to the list.');
  });
});