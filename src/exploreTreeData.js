// 算法讲解请参考公众号文章：前端艺术家的小本本 - 使用栈结构模拟二叉树遍历（非递归）
const exploreTreeData = (tree) => {
    let index = 0
    let root = tree[0]
    let stack = []
    let res = []
    // 根节点入栈
    stack.push([root, index])
    res.push(root.name)
    // 如果栈不为空
    while(stack.length > 0) {
        // 弹出栈顶元素，并将其设置为当前根节点
        let [currentRootNode, index] = stack.pop()
        // 遍历当前根节点的子节点
        while(index < currentRootNode.children.length) {
            const childNode = currentRootNode.children[index]
            childNode.children = childNode.children || []
            // 打印子节点
            res.push(childNode.name)
            // index自增
            index += 1
            // 如果当前节点还有子节点
            if(childNode.children.length > 0) {
                // 则将当前根节点入栈
                stack.push([currentRootNode, index])
                // 并设置当前根节点为当前正在遍历的节点
                index = 0
                currentRootNode = childNode
            }
        }
    }
    return res
}
export default exploreTreeData