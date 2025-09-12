import React from 'react'
import { useData } from '../../contexts/DataContext'


export default function LeaveRequests(){
const { leaves, updateLeaveStatus, loading } = useData()
if(loading) return <div className="p-20">Loading...</div>
const pend = leaves.filter(l=>l.status==='pending')
return (
<div className="card">
<h3>Leave Requests ({pend.length})</h3>
{pend.length===0 && <div className="muted">No pending requests</div>}
<ul className="list-clean">
{pend.map(l=> (
<li key={l.id} className="list-item">
<div>
<strong>{l.employeeName}</strong>
<div className="muted">{l.type} • {new Date(l.from).toDateString()} to {new Date(l.to).toDateString()}</div>
</div>
<div>
<button className="btn btn-sm" onClick={()=>updateLeaveStatus(l.id,'approved')}>Approve</button>
<button className="btn btn-ghost btn-sm" onClick={()=>updateLeaveStatus(l.id,'rejected')}>Reject</button>
</div>
</li>
))}
</ul>
</div>
)
}