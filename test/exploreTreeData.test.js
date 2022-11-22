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