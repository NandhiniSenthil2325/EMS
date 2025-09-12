import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useData } from '../../contexts/DataContext'


export default function ApplyLeave(){
const { user } = useAuth()
const { applyLeave } = useData()
const [type,setType] = useState('Casual')
const [from,setFrom] = useState('')
const [to,setTo] = useState('')
const [reason,setReason] = useState('')
const [msg,setMsg] = useState('')


const submit = async (e)=>{
e.preventDefault(); setMsg('')
await applyLeave({ employeeEmail: user.email, employeeName: user.name, type, from, to, reason })
setMsg('Leave applied')
setType('Casual'); setFrom(''); setTo(''); setReason('')
}


return (
<div className="card">
<h3>Apply Leave</h3>
{msg && <div className="alert success">{msg}</div>}
<form className="form" onSubmit={submit}>
<label>Type</label>
<select value={type} onChange={e=>setType(e.target.value)}>
<option>Casual</option>
<option>Sick</option>
<option>Work from home</option>
</select>
<label>From</label>
<input type="date" value={from} onChange={e=>setFrom(e.target.value)} required />
<label>To</label>
<input type="date" value={to} onChange={e=>setTo(e.target.value)} required />
<label>Reason</label>
<textarea value={reason} onChange={e=>setReason(e.target.value)} rows={3} />
<button className="btn">Apply</button>
</form>
</div>
)
}