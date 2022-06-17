const a = [
    { name: 'ga' },
    { name: 'meo' }
]

const results = a.filter(function (i) {
    if (i.name !== 'ga') {
        return i
    }
})

console.log(results)