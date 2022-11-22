// 算法讲解请参考公众号文章：前端艺术家的小本本 - 使用栈结构模拟二叉树遍历（非递归）
/**
 * 
 * @param {*} tree 树形结构的数据
 * @param {*} callback 遍历节点的回调函数，返回值为布尔值，表示是否需要这个节点（默认为true）
 * @returns 
 */
const initConfig = (config) => {
    config.callback = config.callback || (() => true)
    config.key = config.key || 'name'
}
const exploreTreeData = (tree, config = {}) => {
    initConfig(config)
    let index = 0
    let root = tree[0]
    let stack = []
    let result = []
    // 根节点入栈
    stack.push([root, index])
    result.push(root[config.key])
    // 如果栈不为空
    while(stack.length > 0) {
        // 弹出栈顶元素，并将其设置为当前根节点
        let [currentRootNode, index] = stack.pop()
        // 遍历当前根节点的子节点
        while(index < currentRootNode.children.length) {
            const childNode = currentRootNode.children[index]
            const isNeedToPush = config.callback(currentRootNode.children, index)
            if(!isNeedToPush) {
                currentRootNode.children.splice(index, 1)
            }
            // 打印子节点
            if(isNeedToPush) {
                result.push(childNode[config.key])
            }
            // index自增
            index += 1
            // 如果当前节点还有子节点
            if(childNode.children && childNode.children.length > 0) {
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
export default exploreTreeData