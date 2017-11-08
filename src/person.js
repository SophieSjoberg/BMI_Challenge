function Person(attr){
  this.weight = attr.weight;
  this.height = attr.height;
}

Person.prototype.calculate_bmi = function() {
    this.bmiValue = 24.39;
    this.bmiMessage = "Healthy";
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
    calculator.imperial_bmi(this);
  };
