// Function to calculate BMI
function calculateBMI() {
    // Get input values from the form
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;

    // Validate the input
    if (weight === '' || height === '' || isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the BMI result
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('bmi-value').innerText = `Your BMI: ${bmi.toFixed(2)}`;

    // Explanation based on gender and BMI
    let explanation = '';
    if (bmi < 18.5) {
        explanation = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        explanation = 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        explanation = 'You are overweight.';
    } else {
        explanation = 'You are obese.';
    }

    document.getElementById('bmi-explanation').innerText = `Explanation: ${explanation} (${gender})`;
}
