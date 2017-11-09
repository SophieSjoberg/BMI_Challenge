
describe('BMI_UI - index.html', function() {

  describe("It calculates using metric system", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate').trigger('click');
    });
    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Overweight');
    });
});


 describe("It calculates using imperial system", function() {

 beforeEach(function() {
   jasmine.getFixtures().fixturesPath = '.';
   loadFixtures('index.html');
   $.holdReady(false);
   $('#weight').val('170');
   $('#height').val('70');
   $('#mySelect').val('Imperial Calculator');
   $('#calculate').trigger('click');
 });
 it("displays BMI Value", function() {
   expect($('#display_value').text()).toBe('Your BMI is 24.39');
 });

 it("displays BMI Message", function() {
   expect($('#display_message').text()).toBe('and you are Healthy');
 });
});

});
