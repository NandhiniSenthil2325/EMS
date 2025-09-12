import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';

const EmployeeForm = () => {
  const { employees = [], addEmployee } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    position: '',
    doj: ''  // ✅ Added Date of Joining
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = await addEmployee(formData); // ✅ Saves DOJ too
    console.log('Employee submitted:', newEmployee);

    // Reset form
    setFormData({
      name: '',
      email: '',
      department: '',
      position: '',
      doj: ''
    });
  };

  return (
    <div className="employee-form">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date of Joining:</label>
          <input
            type="date"
            name="doj"
            value={formData.doj}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Employee</button>
      </form>

      <h3>Existing Employees</h3>
      <ul>
        {(employees || []).map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.department} - DOJ: {emp.doj || "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeForm;
