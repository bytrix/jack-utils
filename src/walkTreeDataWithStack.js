// 算法讲解请参考公众号文章：前端艺术家的小本本 - 使用栈结构模拟二叉树遍历（非递归）
const config = {}
/**
 * 
 * @param {*} tree 树形结构的数据
 * @param {*} callback 遍历节点的回调函数，返回值为布尔值，表示是否需要这个节点（默认为true）
 * @returns 
 */
const initConfig = (_config) => {
    config.callback = _config.callback
    config.key = _config.key
    config.children = _config.children
}
const walkTreeData = (tree = [], config = {}) => {
    if(!(tree instanceof Array)) {
        throw new Error('tree is not a correct array format!')
    }
    initConfig(config)
    let index = 0
    let root
    let stack = []
    let result = []
    if(tree.length === 1) {
        // 单根节点（取唯一一个根节点，并打印根节点）
        root = tree[0]
        result.push(root[config.key])
    } else if(tree.length > 1) {
        // 多根节点（设置一个虚拟根节点，且不打印根节点）
        root = {
            [config.key]: '<root>',
            [config.children]: tree
        }
    } else {
        return {
            result: [],
            tree: []
        }
    }
    // 根节点入栈
    config.callback([tree, index])
    stack.push([root, index])
    // 如果栈不为空
    while(stack.length > 0) {
        // 弹出栈顶元素，并将其设置为当前根节点
        let [currentRootNode, index] = stack.pop()
        currentRootNode[config.children] = currentRootNode?.[config.children] || []
        // 遍历当前根节点的子节点
        while(index < currentRootNode[config.children].length) {
            // callback will walk here
            const childNode = currentRootNode[config.children][index]
            if(!childNode) {
                break
            }
            childNode[config.children] = childNode?.[config.children] || []
            const isNeedToPush = config.callback([currentRootNode[config.children], index], currentRootNode)
            if(!isNeedToPush) {
                currentRootNode[config.children].splice(index, 1)
                continue
            }
            // 打印子节点
            if(isNeedToPush) {
                result.push(childNode[config.key])
            }
            // index自增
            index += 1
            // 如果当前节点还有子节点
            if(childNode[config.children].length > 0) {
                // 则将当前根节点入栈
                stack.push([currentRootNode, index])
                // 并设置当前根节点为当前正在遍历的节点
                index = 0
                currentRootNode = childNode
            }
        }
    }
    return {
        result,
        tree
    }
}


export default walkTreeData