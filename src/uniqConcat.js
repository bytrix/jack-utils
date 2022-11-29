export default (arr1, arr2) => {
    let restArr = []
    for(let i = 0; i < arr1.length; i++) {
        const arr1Item = arr1[i]
        restArr = [].concat(restArr, arr2.filter(arr2Item => arr2Item.id !== arr1Item.id))
    }
    return [].concat(arr1, restArr)
}