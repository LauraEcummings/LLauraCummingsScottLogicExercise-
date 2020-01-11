   exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      //specs: ['specs/[filename]}'], //put the name of the test file here after spec/ to run one test
      specs: ['specs/*spec.js'], //or use this code line to run all the tests in the folder
      onPrepare: function () {	
         browser.driver.manage().window().setSize(1680, 1050);
      },
   }