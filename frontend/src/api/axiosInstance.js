// dummy axios instance that simulates network latency and stores to localStorage
export const api = {
get: (key) => {
return new Promise((res) => {
setTimeout(() => {
const data = JSON.parse(localStorage.getItem(key) || 'null')
res({ data })
}, 300)
})
},
post: (key, value) => {
return new Promise((res) => {
setTimeout(() => {
localStorage.setItem(key, JSON.stringify(value))
res({ data: value })
}, 300)
})
}
}


