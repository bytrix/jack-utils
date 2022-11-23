import { test } from 'tap'
import Tree from '../src/index.js'
import realData from './realTreeData.js'

const simpleTree = [
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

const threeLevelTree = [
    {
        name: 'A',
        children: [
            {
                name: 'B',
                children: [
                    {
                        name: 'D',
                        children: [
                            {
                                name: 'H'
                            },
                            {
                                name: 'I'
                            }
                        ]
                    },
                    {
                        name: 'E',
                        children: [
                            {
                                name: 'J'
                            },
                            {
                                name: 'K'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'C',
                children: [
                    {
                        name: 'F',
                        children: [
                            {
                                name: 'L'
                            },
                            {
                                name: 'M'
                            }
                        ]
                    },
                    {
                        name: 'G',
                        children: [
                            {
                                name: 'N'
                            },
                            {
                                name: 'O'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const fourLevelTree = [
    {
        name: '1',
        children: [
            {
                name: '2',
                children: [
                    {
                        name: '4',
                        children: [
                            {
                                name: '8',
                                children: [
                                    {
                                        name: '16'
                                    },
                                    {
                                        name: '17'
                                    }
                                ]
                            },
                            {
                                name: '9',
                                children: [
                                    {
                                        name: '18'
                                    },
                                    {
                                        name: '19'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '5',
                        children: [
                            {
                                name: '10',
                                children: [
                                    {
                                        name: '20'
                                    },
                                    {
                                        name: '21'
                                    }
                                ]
                            },
                            {
                                name: '11',
                                children: [
                                    {
                                        name: '22'
                                    },
                                    {
                                        name: '23'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: '3',
                children: [
                    {
                        name: '6',
                        children: [
                            {
                                name: '12',
                                children: [
                                    {
                                        name: '24'
                                    },
                                    {
                                        name: '25'
                                    }
                                ]
                            },
                            {
                                name: '13',
                                children: [
                                    {
                                        name: '26'
                                    },
                                    {
                                        name: '27'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '7',
                        children: [
                            {
                                name: '14',
                                children: [
                                    {
                                        name: '28'
                                    },
                                    {
                                        name: '29'
                                    }
                                ]
                            },
                            {
                                name: '15',
                                children: [
                                    {
                                        name: '30'
                                    },
                                    {
                                        name: '31'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

test('Result of exploring the binary tree should be A,B,D,E,C,F,G', t => {
    t.same()
    const tree = new Tree({
        data: simpleTree,
        alg: 'stack',
        key: 'name'
    })
    const keys = tree.getKeys()
    t.equal(keys[0], 'A')
    t.equal(keys[1], 'B')
    t.equal(keys[2], 'D')
    t.equal(keys[3], 'E')
    t.equal(keys[4], 'C')
    t.equal(keys[5], 'F')
    t.equal(keys[6], 'G')
    t.equal(keys[7], undefined)
    t.end()
})

test('Callback is invoked when passing second paramter', t => {
    t.same()
    const json = '[{"name":"A","children":[{"name":"C","children":[{"name":"F","children":[]},{"name":"G","children":[]}]}]}]'
    const tree = new Tree({
        alg: 'stack',
        data: simpleTree,
        key: 'name'
    })
    const newTree = tree.explore((children, index) => {
        if(children[index]?.name === 'B') {
            return false
        }
        return true
    })
    t.equal(JSON.stringify(newTree), json)
    t.end()
})

test('Result of exploring tree with multiple roots should be A,C,D,B,E,G,H,F,I', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: treeWithMultipleRoots,
        key: 'name'
    })
    const keys = tree.getKeys()
    t.equal(keys[0], 'A')
    t.equal(keys[1], 'C')
    t.equal(keys[2], 'D')
    t.equal(keys[3], 'B')
    t.equal(keys[4], 'E')
    t.equal(keys[5], 'G')
    t.equal(keys[6], 'H')
    t.equal(keys[7], 'F')
    t.equal(keys[8], 'I')
    t.equal(keys[9], undefined)
    t.end()
})

test('Callback handle with multiple roots tree', t => {
    t.same()
    const json = '[{"name":"A","children":[{"name":"C","children":[]},{"name":"D","children":[]}]},{"name":"B","children":[{"name":"F","children":[{"name":"I","children":[]}]}]}]'
    const tree = new Tree({
        alg: 'stack',
        data: JSON.parse(JSON.stringify(treeWithMultipleRoots)),
        key: 'name'
    })
    const newTree = tree.explore((children, index) => {
        const child = children[index]
        if(child.name === 'E') {
            return false
        }
        return tree
    })
    t.equal(JSON.stringify(newTree), json)
    t.end()
})

test('Test remained nodes', t => {
    t.same()
    const remained = ['B', 'E']
    const json = '[{"name":"B","children":[{"name":"E","children":[]}]}]'
    const tree = new Tree({
        alg: 'stack',
        data: JSON.parse(JSON.stringify(treeWithMultipleRoots)),
        key: 'name'
    })
    const newTree = tree.explore((children, index) => {
        const child = children[index]
        if(remained.indexOf(child.name) === -1) {
            return false
        }
        return true
    })
    t.equal(json, JSON.stringify(newTree))
    t.end()
})

test('Real test example 1', t => {
    t.same()
    const treeWithKey = [{
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
    const json = '[{"title":"咀嚼14P-精准小词","key":"1","children":[{"title":"咀嚼14P-精准小词- pack","key":"1-0","children":[]}]}]'
    const tree = new Tree({
        alg: 'stack',
        data: treeWithKey,
    })
    const newTree = tree.explore((children, index) => {
        const child = children[index]
        if(selectedKeys.indexOf(child.key) === -1) {
            return false
        }
        return true
    })
    t.equal(JSON.stringify(newTree), json)
    t.end()
})

test('Real test example 2', t => {
    t.same()
    const tree = new Tree({
        key: 'id',
        data: realData
    })
    tree.explore((children, index) => {
        return true
    })
    t.end()
})

test('Empty tree', t => {
    t.same()
    const tree = new Tree({
        // TODO: 若未制定alg，这里可能会导致keys出错
        alg: 'stack',
        data: []
    })
    const newTree = tree.explore()
    const keys = tree.getKeys()
    t.equal(newTree.length, 0)
    t.equal(keys.length, 0)
    t.end()
})

test('If there is no key property which value is like 0-0-1, add it to the tree', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: realData,
        key: 'key'
    })
    const newTree =  tree.explore()
    t.end()
})

test('Test three level tree', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: threeLevelTree,
        key: 'name'
    })
    t.end()
})

test('Test four level tree', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: fourLevelTree,
        key: 'name'
    })
    t.end()
})