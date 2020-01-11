//	Test Check nav-bar search box and input text specification - 

var  HeaderSearchBox = function() { 
      this.headerSearchBox = element(by.id("lia-searchformV3"));
      this.searchField = this.headerSearchBox.element(by.name("messageSearchField"));
      this.enteredSearchField = this.headerSearchBox.element(by.name("messageSearchField"));
      this.results = element(by.css(".lia-search-results-container.lia-message-search-results-list-container.lia-component-search-results"));
      this.resultsCount = element(by.css(".search-result-count"));

};

describe('Check nav-bar search box and input text on https://github.community', function() {
   
   var searchBox = new HeaderSearchBox();

	beforeEach(function() {
         browser.get('https://github.community');
	});

   it('entering a text in search box and sending return key to perform search. Check results contian text.', function() {
      var inputText = 'angular';

      searchBox.searchField.click();
      searchBox.searchField.sendKeys(inputText).submit();
      expect(searchBox.results.getText()).toContain(inputText);
   });

      it('entering a text in search box and sending return key to perform search. Check number of results.', function() {
      var inputText = 'angular';

      searchBox.searchField.click();
      searchBox.searchField.sendKeys(inputText).submit();
      expect(searchBox.resultsCount.getText()).toContain("results");
   });

});