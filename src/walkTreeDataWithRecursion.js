const result = []
const config = {}

const initConfig = (_config) => {
    config.callback = _config.callback
    config.key = _config.key
    config.autoKey = _config.autoKey
    config.spreadParentKey = _config.spreadParentKey
    config.parentKeysSeperator = _config.parentKeysSeperator
    config.children = _config.children
    // config.otherTree = _config.otherTree
}

const dig = (tree, parentKeys, key, otherTree, depth = -1) => {
    let len = tree.length
    depth += 1
    if(!parentKeys) {
        parentKeys = []
    }
    for(let i = 0; i < len; i++) {
        const otherTreeItem = otherTree?.[i] || {}
        let walkWithCallbackRes
        if(config.callback) {
            // console.log('recursion callback', tree instanceof Array)
            walkWithCallbackRes = config.callback([tree, i], [otherTree, i, depth])
        }
        if(!walkWithCallbackRes) {
            delete tree[i]
            continue
        }
        // callback will walk here
        const treeItem = tree[i]
        if(!treeItem) {
            continue
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
        const newChildren = treeItem?.[config.children]
        const newOtherTreeItem = otherTreeItem[config.children]
        if(newChildren && newChildren.length > 0) {
            if(config.autoKey) {
                dig(newChildren, newParentKeys, treeItem[config.key], newOtherTreeItem, depth)
            } else {
                dig(newChildren, newParentKeys, undefined, newOtherTreeItem, depth)
            }
        } else {
            continue
        }
    }
    return tree
}

const exploreTreeDataWithRecursion = (tree, config = {}) => {
    initConfig(config)
    return {
        tree: dig(tree, undefined, undefined, config.otherTree, -1),
        result
    }
}

export default exploreTreeDataWithRecursion