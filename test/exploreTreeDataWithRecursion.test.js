import { test } from 'tap'
import Tree from '../src/index.js'


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

test('Recursion test', t => {
    t.same()
    const tree = new Tree({
        key: 'key',
        data: simpleTree,
        autoKey: true
    })
    const newTree = tree.explore()
    const expected = '[{"name":"A","children":[{"name":"B","children":[{"name":"D","key":"0-0-0"},{"name":"E","key":"0-0-1"}],"key":"0-0"},{"name":"C","children":[{"name":"F","key":"0-1-0"},{"name":"G","key":"0-1-1"}],"key":"0-1"}],"key":"0"}]'
    t.equal(expected, JSON.stringify(newTree))
    t.end()
})

test('Recursion four level tree test', t => {
    t.same()
    const expected = `[{"name":"1","children":[{"name":"2","children":[{"name":"4","children":[{"name":"8","children":[{"name":"16","key":"0-0-0-0-0"},{"name":"17","key":"0-0-0-0-1"}],"key":"0-0-0-0"},{"name":"9","children":[{"name":"18","key":"0-0-0-1-0"},{"name":"19","key":"0-0-0-1-1"}],"key":"0-0-0-1"}],"key":"0-0-0"},{"name":"5","children":[{"name":"10","children":[{"name":"20","key":"0-0-1-0-0"},{"name":"21","key":"0-0-1-0-1"}],"key":"0-0-1-0"},{"name":"11","children":[{"name":"22","key":"0-0-1-1-0"},{"name":"23","key":"0-0-1-1-1"}],"key":"0-0-1-1"}],"key":"0-0-1"}],"key":"0-0"},{"name":"3","children":[{"name":"6","children":[{"name":"12","children":[{"name":"24","key":"0-1-0-0-0"},{"name":"25","key":"0-1-0-0-1"}],"key":"0-1-0-0"},{"name":"13","children":[{"name":"26","key":"0-1-0-1-0"},{"name":"27","key":"0-1-0-1-1"}],"key":"0-1-0-1"}],"key":"0-1-0"},{"name":"7","children":[{"name":"14","children":[{"name":"28","key":"0-1-1-0-0"},{"name":"29","key":"0-1-1-0-1"}],"key":"0-1-1-0"},{"name":"15","children":[{"name":"30","key":"0-1-1-1-0"},{"name":"31","key":"0-1-1-1-1"}],"key":"0-1-1-1"}],"key":"0-1-1"}],"key":"0-1"}],"key":"0"}]`
    const tree = new Tree({
        key: 'key',
        data: fourLevelTree,
        autoKey: true
    })
    const newTree = tree.explore()
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
// //     // console.log('tree', tree.explore)
// //     const newTree = tree.explore(treeNode => {
// //         console.log('treeNode', treeNode)
// //         return true
// //     })
// //     console.log('newTree', JSON.stringify(newTree))
// //     // 先调用explore()，再调用getKeys()
// //     // tree.getKeys()
// //     // const { tree: newTree } = exploreTreeDataWithRecursion(fourLevelTree, {
// //     //     key: 'key'
// //     // })
// //     t.end()
// // })
