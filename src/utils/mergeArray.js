const mergeArray = (arr1, arr2, config) => {
    // console.log('config', config)
    const len1 = arr1.length
    const len2 = arr2.length
    const arr = len1 > len2 ? arr1 : arr2
    const restArr = len1 > len2 ? arr2 : arr1
    const len = arr.length
    for(let i = 0; i < len; i++) {
        const item = arr[i]
        const restItem = restArr[i]
        // console.log('item', item?.[config.key], restItem?.[config.key])
        // console.log('restItem', restItem)
        if(item?.[config.key] === undefined) {
            throw new Error('Invalid key!')
        }
        if(restItem !== undefined && item?.[config.key] !== restItem?.[config.key]) {
            arr.push(restItem)
        }
    }
    return arr
}

export default mergeArray