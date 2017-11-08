describe("Person", function() {
  var person;
  beforeEach(function() {
    person = new Person({
      weight: 170,
      height: 70
    });
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(170);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(70);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(24.39);
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual('Overweight');
  });
});
