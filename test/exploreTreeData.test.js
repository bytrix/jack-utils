import exploreTreeData from "../src/exploreTreeData.js";
import { test } from 'tap'

const tree = [
    {
        name: 'A',
        children: [
            {
                name: 'B',
                children: [
                    {
                        name: 'D',
                    },
                    {
                        name: 'E'
                    }
                ]
            },
            {
                name: 'C',
                children: [
                    {
                        name: 'F'
                    },
                    {
                        name: 'G'
                    }
                ]
            }
        ]
    }
]

const treeWithMultipleRoots = [
    {
        name: 'A',
        children: [{
            name: 'C'
        }, {
            name: 'D'
        }]
    },
    {
        name: 'B',
        children: [{
            name: 'E',
            children: [{
                name: 'G'
            }, {
                name: 'H'
            }]
        }, {
            name: 'F',
            children: [{
                name: 'I'
            }]
        }]
    }
]

test('Result of exploring the binary tree should be A,B,D,E,C,F,G', t => {
    const { result } = exploreTreeData(tree)
    t.same()
    t.equal(result[0], 'A')
    t.equal(result[1], 'B')
    t.equal(result[2], 'D')
    t.equal(result[3], 'E')
    t.equal(result[4], 'C')
    t.equal(result[5], 'F')
    t.equal(result[6], 'G')
    t.equal(result[7], undefined)
    t.end()
})

test('Callback is invoked when passing second paramter', t => {
    t.same()
    const json = '[{"name":"A","children":[{"name":"C","children":[{"name":"F"},{"name":"G"}]}]}]'
    const { tree: newTree } = exploreTreeData(tree, {
        callback: (children, index) => {
            if(children[index]?.name === 'B') {
                return false
            }
            return true
        }
    })
    t.equal(JSON.stringify(newTree), json)
    t.end()
})

test('Result of exploring tree with multiple roots should be A,C,D,B,E,G,H,F,I', t => {
    t.same()
    const { result } = exploreTreeData(treeWithMultipleRoots)
    t.equal(result[0], 'A')
    t.equal(result[1], 'C')
    t.equal(result[2], 'D')
    t.equal(result[3], 'B')
    t.equal(result[4], 'E')
    t.equal(result[5], 'G')
    t.equal(result[6], 'H')
    t.equal(result[7], 'F')
    t.equal(result[8], 'I')
    t.equal(result[9], undefined)
    t.end()
})

test('Callback handle with multiple roots tree', t => {
    t.same()
    const json = '[{"name":"A","children":[{"name":"C"},{"name":"D"}]},{"name":"B","children":[{"name":"F","children":[{"name":"I"}]}]}]'
    const { tree: newTree } = exploreTreeData(JSON.parse(JSON.stringify(treeWithMultipleRoots)), {
        callback: (children, index) => {
            const child = children[index]
            if(child.name === 'E') {
                return false
            }
            return true
        }
    })
    t.equal(JSON.stringify(newTree), json)
    t.end()
})

test('Test remained nodes', t => {
    t.same()
    const remained = ['B', 'E']
    const json = '[{"name":"B","children":[{"name":"E","children":[]}]}]'
    const { result, tree: newTree } = exploreTreeData(JSON.parse(JSON.stringify(treeWithMultipleRoots)), {
        callback: (children, index) => {
            const child = children[index]
            if(remained.indexOf(child.name) === -1) {
                return false
            }
            return true
        }
    })
    t.equal(json, JSON.stringify(newTree))
    t.end()
})

test('Real test example', t => {
    t.same()
    const tree = [{
        "title": "咀嚼14P-精准大词",
        "key": "0",
        "children": [{
            "title": "咀嚼14P-精准大词-chew",
            "key": "0-0"
        }, {
            "title": "咀嚼14P-精准大词- teething",
            "key": "0-1"
        }]
    }, {
        "title": "咀嚼14P-精准小词",
        "key": "1",
        "children": [{
            "title": "咀嚼14P-精准小词- pack",
            "key": "1-0"
        }, {
            "title": "咀嚼14P-精准小词- pack2",
            "key": "1-1"
        }]
    }]
    const selectedKeys = ['1', '1-0']
    const json = '[{"title":"咀嚼14P-精准小词","key":"1","children":[{"title":"咀嚼14P-精准小词- pack","key":"1-0"}]}]'
    const { result, tree: newTree } = exploreTreeData(tree, {
        key: 'key',
        callback: (children, index) => {
            const child = children[index]
            if(selectedKeys.indexOf(child.key) === -1) {
                return false
            }
            return true
        }
    })
    t.equal(JSON.stringify(newTree), json)
    t.end()
})