const result = []
const config = {}

const initConfig = (_config) => {
    config.callback = _config.callback
    config.key = _config.key || 'name'
    config.autoKey = _config.autoKey
    config.spreadParentKey = _config.spreadParentKey
    config.parentKeysSeperator = _config.parentKeysSeperator
    // config.otherTree = _config.otherTree
}

const dig = (tree, parentKeys, key, otherTree) => {
    let len = tree.length
    if(!parentKeys) {
        parentKeys = []
    }
    for(let i = 0; i < len; i++) {
        // callback will walk here
        const treeItem = tree[i]
        if(!treeItem) {
            continue
        }
        // console.log('treeItem.children', treeItem[config.key], treeItem.children)
        const otherTreeItem = otherTree?.[i] || {}
        // console.log('otherTreeItem.children', otherTreeItem[config.key], otherTreeItem.children)
        let walkWithCallbackRes
        // console.log('otherTreeItem', otherTreeItem)
        if(config.callback) {
            // if(treeItem[config.key] !== otherTreeItem[config.key]) {
            // }
            walkWithCallbackRes = config.callback([tree, i], [otherTree, i])
            // console.log('walkWithCallbackRes', walkWithCallbackRes)
            // console.log('walkWithCallbackRes - JSON', treeItem[config.key] || otherTreeItem[config.key], JSON.stringify(walkWithCallbackRes))
            // treeItem.children = walkWithCallbackRes
        }
        if(config.spreadParentKey) {
            if(config.parentKeysSeperator) {
                treeItem.path = [].concat(parentKeys, treeItem[config.key]).join(config.parentKeysSeperator)
            } else {
                treeItem.path = [].concat(parentKeys, treeItem[config.key])
            }
        }
        if(config.autoKey) {
            if(key) {
                treeItem[config.key] = `${key}-${i}`
            } else {
                treeItem[config.key] = `${i}`
            }
        }
        result.push(treeItem?.[config.key])
        const newParentKeys = [...parentKeys, treeItem?.[config.key]]
        if(treeItem.children && treeItem.children.length > 0) {
            if(config.autoKey) {
                dig(treeItem.children, newParentKeys, treeItem[config.key], otherTreeItem.children)
            } else {
                dig(treeItem.children, newParentKeys, undefined, otherTreeItem.children)
            }
        } else {
            continue
        }
        // if(walkWithCallbackRes) {
        //     console.log('walkWithCallbackRes', walkWithCallbackRes)
        //     treeItem.children = walkWithCallbackRes
        // }
    }
    return tree
}

const exploreTreeDataWithRecursion = (tree, config = {}) => {
    initConfig(config)
    return {
        tree: dig(tree, undefined, undefined, config.otherTree),
        result
    }
}

export default exploreTreeDataWithRecursion