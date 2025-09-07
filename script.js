function calculateBMI() {
  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const resultBox = document.getElementById('result');

  if (!age || !height || !weight) {
    resultBox.innerHTML = "⚠️ Please fill in all fields.";
    resultBox.className = "result";
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);

  let status = "";
  let cls = "";
  if (bmi < 18.5) { status = "Underweight"; cls = "under"; }
  else if (bmi < 24.9) { status = "Normal"; cls = "normal"; }
  else if (bmi < 29.9) { status = "Overweight"; cls = "over"; }
  else { status = "Obese"; cls = "obese"; }

  resultBox.innerHTML = `
    <div>Your BMI: <strong>${bmi}</strong></div>
    <div class="status ${cls}">${status}</div>
  `;
}
