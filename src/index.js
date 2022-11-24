import walkTreeDataWithStack from './walkTreeDataWithStack.js'
import walkTreeDataWithRecursion from './walkTreeDataWithRecursion.js'
import mergeTree from './utils/mergeTree.js'

const AlgMapping = {
    recursion: walkTreeDataWithRecursion,
    stack: walkTreeDataWithStack
}

class Tree {
    constructor({ alg = 'recursion', data, key = 'key', autoKey = false, spreadParentKey = false, parentKeysSeperator }) {
        this.alg = alg
        this.data = data
        this.key = key
        this.autoKey = autoKey
        this.spreadParentKey = spreadParentKey
        this.parentKeysSeperator = parentKeysSeperator
    }
    _executeAlg(callback = () => true, otherTree) {
        const algFn = AlgMapping[this.alg]
        const { result, tree } = algFn(this.data, {
            key: this.key,
            autoKey: this.autoKey,
            spreadParentKey: this.spreadParentKey,
            parentKeysSeperator: this.parentKeysSeperator,
            callback,
            otherTree,
        })
        return {
            result,
            tree
        }
    }
    walk(callback) {
        const { result, tree } = this._executeAlg(callback)
        this.keys = result
        return tree
    }
    walkWith(otherTree, callback) {
        this.otherTree = otherTree
        const { result, tree } = this._executeAlg(callback, otherTree)
        this.key = result
        return tree
    }
    getKeys() {
        if(!this.keys) {
            const { result } = this._executeAlg()
            this.keys = result
        }
        return this.keys
    }
    // merge(tree1, tree2) {
    //     const tree = new Tree({
    //         alg: 'recursion',
    //         data: tree1,
    //     })
    //     tree.walk((children, index) => {
    //         const child = children[index]

    //     })
    // }
    merge(otherTree) {
        return mergeTree(this.data, otherTree)
    }
    // search(keyword, { depth = 0 }) {
    //     const res = []
    //     this.walk(treeNode => {
    //         console.log('treeNode', treeNode)
    //         return true
    //     })
    //     return res
    // }
}

export default Tree