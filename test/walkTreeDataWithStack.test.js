import { test } from 'tap'
import { Tree } from '../src/index.js'
import realData from './realTreeData.js'
import trimTreeData from './trimTreeData.js'

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

const inheritFromAncestorTree = [
    {
        name: 'A',
        keyFromA: 'value of A',
        children: [
            {
                name: 'B',
                keyFromB: 'value of B',
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

const treeWithoutChildren = [{
	"adGroups": [{
		"adGroupName": "??????14P-????????????-10???",
		"campaignId": 273479956618079,
		"campaignName": "??????14P-????????????",
		"adGroupId": 215360874980540
	}, {
		"adGroupName": "??????14P-?????????-????????????01",
		"campaignId": 7672687267061,
		"campaignName": "??????14P-?????????-????????????",
		"adGroupId": 147840372152037
	}],
	"query": "puppy chew toys for teething",
	"key": "c009f535494e4ec1553c0fddef5ed3f3"
}]

const idTree = [{
    id: '1',
    title: 'A',
    children: [{
        id: '2',
        title: 'B',
        children: [{
            id: '3',
            title: 'C',
            children: [{
                id: '4',
                title: 'D'
            }]
        }]
    }, {
        id: '5',
        title: 'E'
    }]
}]

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
    const newTree = tree.walk(([children, index]) => {
        // console.log('children', children instanceof Array)
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
    const newTree = tree.walk(([children, index]) => {
        const child = children[index]
        if(child?.name === 'E') {
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
    const newTree = tree.walk(([children, index]) => {
        const child = children[index]
        if(remained.indexOf(child?.name) === -1) {
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
        "title": "??????14P-????????????",
        "key": "0",
        "children": [{
            "title": "??????14P-????????????-chew",
            "key": "0-0"
        }, {
            "title": "??????14P-????????????- teething",
            "key": "0-1"
        }]
    }, {
        "title": "??????14P-????????????",
        "key": "1",
        "children": [{
            "title": "??????14P-????????????- pack",
            "key": "1-0"
        }, {
            "title": "??????14P-????????????- pack2",
            "key": "1-1"
        }]
    }]
    const selectedKeys = ['1', '1-0']
    const json = '[{"title":"??????14P-????????????","key":"1","children":[{"title":"??????14P-????????????- pack","key":"1-0","children":[]}]}]'
    const tree = new Tree({
        alg: 'stack',
        data: treeWithKey,
    })
    const newTree = tree.walk(([children, index]) => {
        const child = children[index]
        if(selectedKeys.indexOf(child?.key) === -1) {
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
    tree.walk((children, index) => {
        return true
    })
    t.end()
})

test('Empty tree', t => {
    t.same()
    const tree = new Tree({
        // TODO: ????????????alg????????????????????????keys??????
        alg: 'stack',
        data: []
    })
    const newTree = tree.walk()
    const keys = tree.getKeys()
    // const leafs = tree.getLeafs()
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
    const newTree =  tree.walk()
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

test('Get leafs with ancestor\'s properties', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: inheritFromAncestorTree,
        key: 'name'
    })
    const leafs = tree.getLeafs({
        inherit: true,
        inheritKeys: ['keyFromA', 'keyFromB']
    })
    const expected = '[{"name":"D","children":[],"keyFromB":"value of B"},{"name":"E","children":[],"keyFromB":"value of B"},{"name":"F","children":[]},{"name":"G","children":[]}]'
    t.equal(JSON.stringify(leafs), expected)
    t.end()
})

test('Get leafs from ancestor\'s properties which is same with children', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: inheritFromAncestorTree,
        key: 'name'
    })
    const leafs = tree.getLeafs({
        inherit: true,
        inheritKeys: [{
            sourceKey: 'name',
            targetKey: 'parentName'
        }]
    })
    const expected = '[{"name":"D","children":[],"parentName":"B"},{"name":"E","children":[],"parentName":"B"},{"name":"F","children":[],"parentName":"C"},{"name":"G","children":[],"parentName":"C"}]'
    t.equal(JSON.stringify(leafs), expected)
    t.end()
})

test('Test tree without children', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: treeWithoutChildren,
        children: 'adGroups'
    })
    const expected = '[{"adGroups":[{"adGroupName":"??????14P-????????????-10???","campaignId":273479956618079,"campaignName":"??????14P-????????????","adGroupId":215360874980540,"adGroups":[]},{"adGroupName":"??????14P-?????????-????????????01","campaignId":7672687267061,"campaignName":"??????14P-?????????-????????????","adGroupId":147840372152037,"adGroups":[]}],"query":"puppy chew toys for teething","key":"c009f535494e4ec1553c0fddef5ed3f3"}]'
    const expectedKeys = '["c009f535494e4ec1553c0fddef5ed3f3",null,null]'
    const expectedLeafs = '[{"adGroupName":"??????14P-????????????-10???","campaignId":273479956618079,"campaignName":"??????14P-????????????","adGroupId":215360874980540,"adGroups":[]},{"adGroupName":"??????14P-?????????-????????????01","campaignId":7672687267061,"campaignName":"??????14P-?????????-????????????","adGroupId":147840372152037,"adGroups":[]}]'
    const newTree = tree.walk()
    const leafs = tree.getLeafs()
    const keys = tree.getKeys()
    t.equal(JSON.stringify(leafs), expectedLeafs)
    t.equal(JSON.stringify(keys), expectedKeys)
    t.equal(JSON.stringify(newTree), expected)
    t.end()
})

test('Test no children tree with inherit', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: treeWithoutChildren,
        children: 'adGroups',
    })
    const expectedLeafs = '[{"adGroupName":"??????14P-????????????-10???","campaignId":273479956618079,"campaignName":"??????14P-????????????","adGroupId":215360874980540,"adGroups":[],"key":"c009f535494e4ec1553c0fddef5ed3f3","query":"puppy chew toys for teething"},{"adGroupName":"??????14P-?????????-????????????01","campaignId":7672687267061,"campaignName":"??????14P-?????????-????????????","adGroupId":147840372152037,"adGroups":[],"key":"c009f535494e4ec1553c0fddef5ed3f3","query":"puppy chew toys for teething"}]'
    const leafs = tree.getLeafs({
        inherit: true,
        inheritKeys: ['key', 'query']
    })
    t.equal(JSON.stringify(leafs), expectedLeafs)
    t.end()
})

test('Test trimTree data', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: trimTreeData,
    })
    const newTree = tree.walk(([children, index]) => {
        // console.log('walk', children)
        const child = children[index]
        if(child?.id === '63853af90c37c57dbf98ae44') {
            return true
        }
        // return false
        // console.log('id', child === undefined)
        return false
    })
    // console.log('newTree', JSON.stringify(newTree))
    t.end()
})

test('Test idTree', t => {
    t.same()
    const tree = new Tree({
        alg: 'stack',
        data: idTree,
        path: true
    })
    const newTree = tree.walk()
    // console.log(JSON.stringify(newTree))
    t.end()
})