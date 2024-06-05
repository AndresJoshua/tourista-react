import React, { useState } from "react";
import "./SalaryCalculator.css";


const SalaryCalculator = () => {
  const [salary, setSalary] = useState("");
  const [workDays, setWorkDays] = useState("");
  const [workHours, setWorkHours] = useState("");
  const [dailyPay, setDailyPay] = useState("");
  const [hourlyPay, setHourlyPay] = useState("");

  const calculatePay = () => {
    let dailyPayValue = "";
    let hourlyPayValue = "";

    if (!salary || !workDays || !workHours) {
      dailyPayValue = "Please fill out all fields";
      hourlyPayValue = "Please fill out all fields";
    } else if (salary < 0 || workDays < 0 || workHours < 0) {
      dailyPayValue = "Invalid! Negative not allowed";
      hourlyPayValue = "Invalid! Negative not allowed";
    } else if (workDays > 30 || workHours > 24) {
      dailyPayValue = "Invalid! Work Hours Cannot Exceed 24 Hours";
      hourlyPayValue = "Invalid! Work Days Cannot Exceed 30 Days";
    } else {
      dailyPayValue = (salary / workDays).toFixed(2);
      hourlyPayValue = (salary / workDays / workHours).toFixed(2);
    }

    setDailyPay(dailyPayValue);
    setHourlyPay(hourlyPayValue);
  };
  

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2>Book an appointment!</h2>
        <div className="input-group">
          <label htmlFor="salary-input">Budget</label>
          <input
            type="number"
            id="salary-input"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="work-days-input">Days of stay?</label>
          <input
            type="number"
            id="work-days-input"
            value={workDays}
            onChange={(e) => setWorkDays(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="work-hours-input">Number of guest?</label>
          <input
            type="number"
            id="work-hours-input"
            value={workHours}
            onChange={(e) => setWorkHours(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={calculatePay}>Confirm</button>
        </div>
        <div className="output-group">
          <p>Hotel Rent: {dailyPay}</p>
          <p>Meal Payment: {hourlyPay}</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
