import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function BMICalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight <= 0 || height <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter valid weight and height.',
      });
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);

    setBMI(bmiValue);
  };

  return (
    <div className="text-center mt-5">
      <h1 style={{ color: 'white' }}>BMI CALCULATOR</h1>
      <div className='mt-5'>
        <label>Weight (kg):</label>
        <input style={{ width: '600px', height: '40px',borderRadius:"5px" }}
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className='mt-3'>
        <label>Height (cm):</label>
        <input style={{ width: '600px', height: '40px',borderRadius:"5px" }}
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className='mt-5 me-6 rounded ' style={{ width: '330px', height: '40px', backgroundColor: '#311b92', color: 'white',borderRadius:"20px" }} onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div className='mt-5' style={{ color: 'white' }}>
          <h1>Your BMI is: {bmi.toFixed(2)}</h1>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
