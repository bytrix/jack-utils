import uniqConcat from '../src/uniqConcat.js'

const arr1 = [{
    id: 1,
    name: 'jack'
}]

const arr2 = [{
    id: 1
}, {
    id: 2,
    name: 'tom'
}]

const res = uniqConcat(arr1, arr2)

console.log(res)
