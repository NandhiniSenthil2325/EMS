import React from 'react'
import { useData } from '../../contexts/DataContext'


export default function EmployeeList(){
const { employees, loading } = useData()
if(loading) return <div className="p-20">Loading...</div>
return (
<div className="card">
<h3>All Employees</h3>
<table className="table">
<thead><tr><th>Name</th><th>Dept</th><th>Email</th><th>Joining</th></tr></thead>
<tbody>
{employees.map(e=> (
<tr key={e.id}><td>{e.name}</td><td>{e.department}</td><td>{e.email}</td><td>{e.joining}</td></tr>
))}
</tbody>
</table>
</div>
)
}