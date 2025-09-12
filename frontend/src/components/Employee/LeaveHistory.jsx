import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useData } from '../../contexts/DataContext';

export default function LeaveHistory() {
  const { user } = useAuth();
  const { leaves, loading } = useData();

  if(loading) return <div className="p-20">Loading...</div>;

  const myLeaves = leaves.filter(l=>l.employeeEmail===user.email);

  return (
    <div className="page">
      <h2>Leave History</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th><th>From</th><th>To</th><th>Reason</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myLeaves.length===0 ? (
            <tr><td colSpan={5} style={{textAlign:'center'}}>No leaves applied</td></tr>
          ) : myLeaves.map(l=>(
            <tr key={l.id}>
              <td>{l.type}</td>
              <td>{new Date(l.from).toLocaleDateString()}</td>
              <td>{new Date(l.to).toLocaleDateString()}</td>
              <td>{l.reason}</td>
              <td>{l.status==='approved'?'✅ Approved':l.status==='rejected'?'❌ Rejected':'⏳ Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
