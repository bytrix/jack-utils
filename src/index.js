import walkTreeDataWithStack from './walkTreeDataWithStack.js'
import walkTreeDataWithRecursion from './walkTreeDataWithRecursion.js'
import mergeTree from './utils/mergeTree.js'
import uniqConcat from './uniqConcat.js'

const AlgMapping = {
    recursion: walkTreeDataWithRecursion,
    stack: walkTreeDataWithStack
}

class Tree {
    constructor({
        alg = 'recursion',
        data, key = 'key',
        autoKey = false,
        spreadParentKey = false,
        parentKeysSeperator,
        children = 'children'
    }) {
        this.alg = alg
        this.data = data
        this.key = key
        this.autoKey = autoKey
        this.spreadParentKey = spreadParentKey
        this.parentKeysSeperator = parentKeysSeperator
        this.children = children
    }
    _executeAlg(callback = () => true, otherTree) {
        const algFn = AlgMapping[this.alg]
        // console.log('_executeAlg walk', this.alg)
        const { result, tree } = algFn(this.data, {
            key: this.key,
            autoKey: this.autoKey,
            spreadParentKey: this.spreadParentKey,
            parentKeysSeperator: this.parentKeysSeperator,
            children: this.children,
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
    getLeafs({ inherit = false, inheritKeys = [] } = {}) {
        const leafs = []
        this.walk(([children, index], currentRoot) => {
            const child = children[index]
            let parentKeys = {}
            if(inherit) {
                parentKeys = inheritKeys.reduce((total, inheritKey) => {
                    if(typeof(inheritKey) === 'string') {
                        total[inheritKey] = total[inheritKey] || currentRoot?.[inheritKey]
                    } else if(typeof(inheritKey) === 'object') {
                        const { sourceKey, targetKey } = inheritKey
                        total[targetKey] = total[targetKey] || currentRoot?.[sourceKey]
                    }
                    return total
                }, parentKeys)
            }
            if(!child) return
            const childrenOfChild = child?.[this.children]
            if(!childrenOfChild || (childrenOfChild && childrenOfChild.length === 0)) {
                if(inherit) {
                    leafs.push({
                        ...child,
                        ...parentKeys,
                    })
                } else {
                    leafs.push(child)
                }
            }
            return true
        })
        return leafs
    }
    merge(otherTree) {
        return mergeTree(this.data, otherTree, {
            key: this.key,
            children: this.children
        })
    }
}

export default Tree

export {
    uniqConcat
}