const result = []
const config = {}

const initConfig = (_config) => {
    config.callback = _config.callback || (() => true)
    config.key = _config.key || 'name'
}

const dig = (tree, key) => {
    let len = tree.length
    for(let i = 0; i < len; i++) {
        const treeItem = tree[i]
        if(key) {
            treeItem[config.key] = `${key}-${i}`
        } else {
            treeItem[config.key] = `${i}`
        }
        result.push(treeItem[config.key])
        if(treeItem.children && treeItem.children.length > 0) {
            dig(treeItem.children, treeItem[config.key])
        } else {
            continue
        }
    }
    return tree
}

const exploreTreeDataWithRecursion = (tree, config = {}) => {
    initConfig(config)
    return {
        tree: dig(tree),
        result
    }
}

export default exploreTreeDataWithRecursion