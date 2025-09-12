import React, { useState } from "react";
import { useData } from "../../contexts/DataContext";

export default function DepartmentForm() {
  const { employees } = useData();
  const [deptName, setDeptName] = useState('');
  const [msg, setMsg] = useState('');

  const departments = [...new Set(employees.map(e=>e.department))];

  const handleAdd = () => {
    if(!deptName) return;
    setMsg(`Department "${deptName}" added!`);
    setDeptName('');
  };

  return (
    <div className="card">
      <h3>Manage Departments</h3>
      {msg && <div className="alert success">{msg}</div>}
      <label>New Department</label>
      <input value={deptName} onChange={e=>setDeptName(e.target.value)} placeholder="Department Name" />
      <button className="btn" onClick={handleAdd}>Add Department</button>

      <h4 style={{marginTop:12}}>Existing Departments:</h4>
      <ul>
        {departments.map((d,i)=><li key={i}>{d}</li>)}
      </ul>
    </div>
  );
}
