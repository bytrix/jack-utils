import exploreTreeDataWithStack from './exploreTreeDataWithStack.js'
import exploreTreeDataWithRecursion from './exploreTreeDataWithRecursion.js'

const AlgMapping = {
    recursion: exploreTreeDataWithRecursion,
    stack: exploreTreeDataWithStack
}

class Tree {
    constructor({ alg = 'recursion', data, key = 'key', autoKey = false }) {
        this.alg = alg
        this.data = data
        this.key = key
        this.autoKey = autoKey
    }
    _executeAlg(callback = () => true) {
        const algFn = AlgMapping[this.alg]
        const { result, tree } = algFn(this.data, {
            key: this.key,
            autoKey: this.autoKey,
            callback,
        })
        return {
            result,
            tree
        }
    }
    explore(callback) {
        const { result, tree } = this._executeAlg(callback)
        this.keys = result
        return tree
    }
    getKeys() {
        if(!this.keys) {
            const { result } = this._executeAlg()
            this.keys = result
        }
        return this.keys
    }
    // search(keyword, { depth = 0 }) {
    //     const res = []
    //     this.explore(treeNode => {
    //         console.log('treeNode', treeNode)
    //         return true
    //     })
    //     return res
    // }
}

export default Tree