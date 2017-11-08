
describe('BMI_UI - index.html', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#weight').val('170');
      $('#height').val('70');
      $('#calculate').trigger('click');
    });
    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 24.39');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Healthy');
    });

});
