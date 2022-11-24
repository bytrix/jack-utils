import { test } from 'tap'
import Tree from '../src/index.js'
import mergeTree from '../src/utils/mergeTree.js'

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

const toBeMergedTree1 = [
    {
        name: 'A',
        children: [
            {
                name: 'B',
                children: [
                    {
                        name: 'D'
                    }
                ]
            },
            {
                name: 'C',
                children: [
                    {
                        name: 'F'
                    }
                ]
            }
        ]
    }
]

const toBeMergedTree2 = [
    {
        name: 'A',
        children: [
            {
                name: 'B',
                children: [
                    {
                        name: 'E'
                    }
                ]
            }
        ]
    }
]

// test('Recursion test', t => {
//     t.same()
//     const tree = new Tree({
//         key: 'key',
//         data: simpleTree,
//         autoKey: true
//     })
//     const newTree = tree.walk()
//     const expected = '[{"name":"A","children":[{"name":"B","children":[{"name":"D","key":"0-0-0"},{"name":"E","key":"0-0-1"}],"key":"0-0"},{"name":"C","children":[{"name":"F","key":"0-1-0"},{"name":"G","key":"0-1-1"}],"key":"0-1"}],"key":"0"}]'
//     t.equal(expected, JSON.stringify(newTree))
//     t.end()
// })

// test('Recursion four level tree test', t => {
//     t.same()
//     const expected = `[{"name":"1","children":[{"name":"2","children":[{"name":"4","children":[{"name":"8","children":[{"name":"16","key":"0-0-0-0-0"},{"name":"17","key":"0-0-0-0-1"}],"key":"0-0-0-0"},{"name":"9","children":[{"name":"18","key":"0-0-0-1-0"},{"name":"19","key":"0-0-0-1-1"}],"key":"0-0-0-1"}],"key":"0-0-0"},{"name":"5","children":[{"name":"10","children":[{"name":"20","key":"0-0-1-0-0"},{"name":"21","key":"0-0-1-0-1"}],"key":"0-0-1-0"},{"name":"11","children":[{"name":"22","key":"0-0-1-1-0"},{"name":"23","key":"0-0-1-1-1"}],"key":"0-0-1-1"}],"key":"0-0-1"}],"key":"0-0"},{"name":"3","children":[{"name":"6","children":[{"name":"12","children":[{"name":"24","key":"0-1-0-0-0"},{"name":"25","key":"0-1-0-0-1"}],"key":"0-1-0-0"},{"name":"13","children":[{"name":"26","key":"0-1-0-1-0"},{"name":"27","key":"0-1-0-1-1"}],"key":"0-1-0-1"}],"key":"0-1-0"},{"name":"7","children":[{"name":"14","children":[{"name":"28","key":"0-1-1-0-0"},{"name":"29","key":"0-1-1-0-1"}],"key":"0-1-1-0"},{"name":"15","children":[{"name":"30","key":"0-1-1-1-0"},{"name":"31","key":"0-1-1-1-1"}],"key":"0-1-1-1"}],"key":"0-1-1"}],"key":"0-1"}],"key":"0"}]`
//     const tree = new Tree({
//         key: 'key',
//         data: fourLevelTree,
//         autoKey: true
//     })
//     const newTree = tree.walk()
//     t.equal(JSON.stringify(newTree), expected)
//     t.end()
// })

// test('Test parentKeys', t => {
//     t.same()
//     const tree = new Tree({
//         alg: 'recursion',
//         key: 'name',
//         data: fourLevelTree,
//         spreadParentKey: true,
//         autoKey: false
//     })
//     const newTree = tree.walk()
//     t.equal(newTree[0].path.join(','), '1')
//     t.equal(newTree[0].children[0].path.join(','), '1,2')
//     t.equal(newTree[0].children[1].path.join(','), '1,3')
//     t.equal(newTree[0].children[0].children[0].path.join(','), '1,2,4')
//     t.equal(newTree[0].children[0].children[1].path.join(','), '1,2,5')
//     t.equal(newTree[0].children[1].children[0].path.join(','), '1,3,6')
//     t.equal(newTree[0].children[1].children[1].path.join(','), '1,3,7')
//     t.equal(newTree[0].children[0].children[0].children[0].path.join(','), '1,2,4,8')
//     t.equal(newTree[0].children[0].children[0].children[1].path.join(','), '1,2,4,9')
//     t.equal(newTree[0].children[0].children[1].children[0].path.join(','), '1,2,5,10')
//     t.equal(newTree[0].children[0].children[1].children[1].path.join(','), '1,2,5,11')
//     t.equal(newTree[0].children[1].children[0].children[0].path.join(','), '1,3,6,12')
//     t.equal(newTree[0].children[1].children[0].children[1].path.join(','), '1,3,6,13')
//     t.equal(newTree[0].children[1].children[1].children[0].path.join(','), '1,3,7,14')
//     t.equal(newTree[0].children[1].children[1].children[1].path.join(','), '1,3,7,15')
//     t.equal(newTree[0].children[0].children[0].children[0].children[0].path.join(','), '1,2,4,8,16')
//     t.equal(newTree[0].children[0].children[0].children[0].children[1].path.join(','), '1,2,4,8,17')
//     t.equal(newTree[0].children[0].children[0].children[1].children[0].path.join(','), '1,2,4,9,18')
//     t.equal(newTree[0].children[0].children[0].children[1].children[1].path.join(','), '1,2,4,9,19')
//     t.equal(newTree[0].children[0].children[1].children[0].children[0].path.join(','), '1,2,5,10,20')
//     t.equal(newTree[0].children[0].children[1].children[0].children[1].path.join(','), '1,2,5,10,21')
//     t.equal(newTree[0].children[0].children[1].children[1].children[0].path.join(','), '1,2,5,11,22')
//     t.equal(newTree[0].children[0].children[1].children[1].children[1].path.join(','), '1,2,5,11,23')
//     t.equal(newTree[0].children[1].children[0].children[0].children[0].path.join(','), '1,3,6,12,24')
//     t.equal(newTree[0].children[1].children[0].children[0].children[1].path.join(','), '1,3,6,12,25')
//     t.equal(newTree[0].children[1].children[0].children[1].children[0].path.join(','), '1,3,6,13,26')
//     t.equal(newTree[0].children[1].children[0].children[1].children[1].path.join(','), '1,3,6,13,27')
//     t.equal(newTree[0].children[1].children[1].children[0].children[0].path.join(','), '1,3,7,14,28')
//     t.equal(newTree[0].children[1].children[1].children[0].children[1].path.join(','), '1,3,7,14,29')
//     t.equal(newTree[0].children[1].children[1].children[1].children[0].path.join(','), '1,3,7,15,30')
//     t.equal(newTree[0].children[1].children[1].children[1].children[1].path.join(','), '1,3,7,15,31')
//     t.end()
// })

// test('Test parentKeys', t => {
//     t.same()
//     const tree = new Tree({
//         alg: 'recursion',
//         key: 'name',
//         data: fourLevelTree,
//         spreadParentKey: true,
//         parentKeysSeperator: '-',
//         autoKey: false
//     })
//     const newTree = tree.walk()
//     t.equal(newTree[0].path, '1')
//     t.equal(newTree[0].children[0].path, '1-2')
//     t.equal(newTree[0].children[1].path, '1-3')
//     t.equal(newTree[0].children[0].children[0].path, '1-2-4')
//     t.equal(newTree[0].children[0].children[1].path, '1-2-5')
//     t.equal(newTree[0].children[1].children[0].path, '1-3-6')
//     t.equal(newTree[0].children[1].children[1].path, '1-3-7')
//     t.equal(newTree[0].children[0].children[0].children[0].path, '1-2-4-8')
//     t.equal(newTree[0].children[0].children[0].children[1].path, '1-2-4-9')
//     t.equal(newTree[0].children[0].children[1].children[0].path, '1-2-5-10')
//     t.equal(newTree[0].children[0].children[1].children[1].path, '1-2-5-11')
//     t.equal(newTree[0].children[1].children[0].children[0].path, '1-3-6-12')
//     t.equal(newTree[0].children[1].children[0].children[1].path, '1-3-6-13')
//     t.equal(newTree[0].children[1].children[1].children[0].path, '1-3-7-14')
//     t.equal(newTree[0].children[1].children[1].children[1].path, '1-3-7-15')
//     t.equal(newTree[0].children[0].children[0].children[0].children[0].path, '1-2-4-8-16')
//     t.equal(newTree[0].children[0].children[0].children[0].children[1].path, '1-2-4-8-17')
//     t.equal(newTree[0].children[0].children[0].children[1].children[0].path, '1-2-4-9-18')
//     t.equal(newTree[0].children[0].children[0].children[1].children[1].path, '1-2-4-9-19')
//     t.equal(newTree[0].children[0].children[1].children[0].children[0].path, '1-2-5-10-20')
//     t.equal(newTree[0].children[0].children[1].children[0].children[1].path, '1-2-5-10-21')
//     t.equal(newTree[0].children[0].children[1].children[1].children[0].path, '1-2-5-11-22')
//     t.equal(newTree[0].children[0].children[1].children[1].children[1].path, '1-2-5-11-23')
//     t.equal(newTree[0].children[1].children[0].children[0].children[0].path, '1-3-6-12-24')
//     t.equal(newTree[0].children[1].children[0].children[0].children[1].path, '1-3-6-12-25')
//     t.equal(newTree[0].children[1].children[0].children[1].children[0].path, '1-3-6-13-26')
//     t.equal(newTree[0].children[1].children[0].children[1].children[1].path, '1-3-6-13-27')
//     t.equal(newTree[0].children[1].children[1].children[0].children[0].path, '1-3-7-14-28')
//     t.equal(newTree[0].children[1].children[1].children[0].children[1].path, '1-3-7-14-29')
//     t.equal(newTree[0].children[1].children[1].children[1].children[0].path, '1-3-7-15-30')
//     t.equal(newTree[0].children[1].children[1].children[1].children[1].path, '1-3-7-15-31')
//     t.end()
// })

test('Walk two trees together', t => {
    t.same()
    const tree = new Tree({
        alg: 'recursion',
        data: toBeMergedTree1,
        key: 'name'
    })
    const expected = '[{"name":"A","children":[{"name":"B","children":[{"name":"D"},{"name":"E"}]},{"name":"C","children":[{"name":"F"}]}]}]'
    // const newTree = tree.walkWith(toBeMergedTree2, ([children1], [children2]) => {
    //     const merged = mergeTree(children1, children2, {
    //         key: 'name'
    //     })
    //     return merged
    // })
    // const newTree = mergeTree(toBeMergedTree1, toBeMergedTree2)
    const newTree = tree.merge(toBeMergedTree2)
    // console.log('walkWith newTree', JSON.stringify(newTree))
    t.equal(JSON.stringify(newTree), expected)
    t.end()
})

// // test('Search a keyword in a specific depth', t => {
// //     t.same()
// //     const expected = `[{"name":"1","children":[{"name":"2","children":[{"name":"4","children":[{"name":"8","children":[{"name":"16","key":"0-0-0-0-0"},{"name":"17","key":"0-0-0-0-1"}],"key":"0-0-0-0"},{"name":"9","children":[{"name":"18","key":"0-0-0-1-0"},{"name":"19","key":"0-0-0-1-1"}],"key":"0-0-0-1"}],"key":"0-0-0"},{"name":"5","children":[{"name":"10","children":[{"name":"20","key":"0-0-1-0-0"},{"name":"21","key":"0-0-1-0-1"}],"key":"0-0-1-0"},{"name":"11","children":[{"name":"22","key":"0-0-1-1-0"},{"name":"23","key":"0-0-1-1-1"}],"key":"0-0-1-1"}],"key":"0-0-1"}],"key":"0-0"},{"name":"3","children":[{"name":"6","children":[{"name":"12","children":[{"name":"24","key":"0-1-0-0-0"},{"name":"25","key":"0-1-0-0-1"}],"key":"0-1-0-0"},{"name":"13","children":[{"name":"26","key":"0-1-0-1-0"},{"name":"27","key":"0-1-0-1-1"}],"key":"0-1-0-1"}],"key":"0-1-0"},{"name":"7","children":[{"name":"14","children":[{"name":"28","key":"0-1-1-0-0"},{"name":"29","key":"0-1-1-0-1"}],"key":"0-1-1-0"},{"name":"15","children":[{"name":"30","key":"0-1-1-1-0"},{"name":"31","key":"0-1-1-1-1"}],"key":"0-1-1-1"}],"key":"0-1-1"}],"key":"0-1"}],"key":"0"}]`
// //     const tree = new Tree({
// //         alg: 'recursion',
// //         data: fourLevelTree,
// //         key: 'key'
// //     })
// //     // console.log('tree', tree.walk)
// //     const newTree = tree.walk(treeNode => {
// //         console.log('treeNode', treeNode)
// //         return true
// //     })
// //     console.log('newTree', JSON.stringify(newTree))
// //     // 先调用walk()，再调用getKeys()
// //     // tree.getKeys()
// //     // const { tree: newTree } = walkTreeDataWithRecursion(fourLevelTree, {
// //     //     key: 'key'
// //     // })
// //     t.end()
// // })
