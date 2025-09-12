import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useData } from '../../contexts/DataContext'


export default function Profile(){
const { user } = useAuth()
const { employees } = useData()
const me = employees.find(e=>e.email===user.email) || {}
return (
<div className="card">
<h3>Profile</h3>
<div className="profile-grid">
<div className="avatar">{(me.name||user.name||'U').slice(0,1)}</div>
<div>
<h4>{me.name || user.name}</h4>
<div className="muted">{me.department || '—'}</div>
<div className="muted">{user.email}</div>
<div style={{marginTop:12}}>Joined: <strong>{me.joining || '—'}</strong></div>
</div>
</div>
</div>
)}