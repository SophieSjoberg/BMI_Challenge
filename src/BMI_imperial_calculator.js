function BMI_imperial_Calculator() {
}

BMICalculator.prototype.imperial_bmi = function(obj) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height * height) * 703;
      obj.bmiValue = parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj);
    }
};
