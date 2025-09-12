import { v4 as uuid } from 'uuid'
const EMP_KEY = 'ems_employees_v1'
const LEAVE_KEY = 'ems_leaves_v1'


function seed(){
if(!localStorage.getItem(EMP_KEY)){
const emps = [
{ id: uuid(), name: 'John Employee', email: 'john@demo.com', role:'employee', department:'Sales', joining:'2023-06-01' },
{ id: uuid(), name: 'Jane Doe', email: 'jane@demo.com', role:'employee', department:'Design', joining:'2024-02-12' }

]
localStorage.setItem(EMP_KEY, JSON.stringify(emps))
}
if(!localStorage.getItem(LEAVE_KEY)){
localStorage.setItem(LEAVE_KEY, JSON.stringify([]))
}
}
seed()


export const empService = {
list: () => new Promise(res => setTimeout(()=> res(JSON.parse(localStorage.getItem(EMP_KEY) || '[]')),300)),
add: (payload) => new Promise(res => setTimeout(()=>{
const list = JSON.parse(localStorage.getItem(EMP_KEY) || '[]')
const entry = { id: uuid(), ...payload }
list.unshift(entry)
localStorage.setItem(EMP_KEY, JSON.stringify(list))
res(entry)
},300)),
update: (id, payload) => new Promise(res => setTimeout(()=>{
const list = JSON.parse(localStorage.getItem(EMP_KEY) || '[]')
const idx = list.findIndex(e=>e.id===id)
if(idx>-1){ list[idx] = { ...list[idx], ...payload }; localStorage.setItem(EMP_KEY, JSON.stringify(list)) }
res(list[idx])
},300)),
leaves: {
list: () => new Promise(res => setTimeout(()=> res(JSON.parse(localStorage.getItem(LEAVE_KEY) || '[]')),300)),
apply: (leave) => new Promise(res => setTimeout(()=>{
const list = JSON.parse(localStorage.getItem(LEAVE_KEY) || '[]')
const entry = { id: uuid(), status: 'pending', appliedAt: new Date().toISOString(), ...leave }
list.unshift(entry)
localStorage.setItem(LEAVE_KEY, JSON.stringify(list))
res(entry)
},300)),
updateStatus: (id, status) => new Promise(res => setTimeout(()=>{
const list = JSON.parse(localStorage.getItem(LEAVE_KEY) || '[]')
const idx = list.findIndex(l=>l.id===id)
if(idx>-1){ list[idx].status = status; localStorage.setItem(LEAVE_KEY, JSON.stringify(list)) }
res(list[idx])
},300))
}
}