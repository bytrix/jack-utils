const arrayIntegrate = (sourceArr, toBeIntegratedArr, config = {}) => {
    const { match, properties } = config
    return sourceArr.map(sourceItem => {
        const foundTobeIntegratedItem = toBeIntegratedArr.find(toBeIntegratedItem => match(sourceItem, toBeIntegratedItem))
        let appendedProperties = {}
        if(foundTobeIntegratedItem) {
            appendedProperties = properties.reduce((total, propertyName) => {
                const propertyValue = foundTobeIntegratedItem[propertyName]
                total[propertyName] = propertyValue
                return total
            }, {})
        }
        return {
            ...sourceItem,
            ...appendedProperties
        }
    })
}

export default arrayIntegrate