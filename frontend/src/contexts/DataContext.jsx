import React, { createContext, useContext, useEffect, useState } from 'react';
import { empService } from '../api/employee';
import { deptService } from '../api/department'; // 👈 new service for departments

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]); // 👈 added
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [emps, lvs, depts] = await Promise.all([
        empService.list(),
        empService.leaves.list(),
        deptService.list() // 👈 fetch departments
      ]);

      setEmployees(emps);
      setLeaves(lvs);
      setDepartments(depts); // 👈 set departments
    } catch (err) {
      console.error("Failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // ---- Employee Actions ----
  const addEmployee = async (payload) => {
    const res = await empService.add(payload);
    setEmployees(prev => [res, ...prev]);
    return res;
  };

  const updateEmployee = async (id, payload) => {
    const res = await empService.update(id, payload);
    setEmployees(prev => prev.map(e => e.id === id ? res : e));
    return res;
  };

  // ---- Leave Actions ----
  const applyLeave = async (payload) => {
    const res = await empService.leaves.apply(payload);
    setLeaves(prev => [res, ...prev]);
    return res;
  };

  const updateLeaveStatus = async (id, status) => {
    const res = await empService.leaves.updateStatus(id, status);
    setLeaves(prev => prev.map(l => l.id === id ? res : l));
    return res;
  };

  // ---- Department Actions ----
  const addDepartment = async (payload) => {
    const res = await deptService.add(payload);
    setDepartments(prev => [res, ...prev]);
    return res;
  };

  const updateDepartment = async (id, payload) => {
    const res = await deptService.update(id, payload);
    setDepartments(prev => prev.map(d => d.id === id ? res : d));
    return res;
  };

  return (
    <DataContext.Provider
      value={{
        employees,
        departments, 
        leaves,
        loading,
        load,
        addEmployee,
        updateEmployee,
        applyLeave,
        updateLeaveStatus,
        addDepartment,
        updateDepartment
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
