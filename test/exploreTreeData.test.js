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
    const res = exploreTreeData(tree)
    t.same()
    t.equal(res[0], 'A')
    t.equal(res[1], 'B')
    t.equal(res[2], 'D')
    t.equal(res[3], 'E')
    t.equal(res[4], 'C')
    t.equal(res[5], 'F')
    t.equal(res[6], 'G')
    t.equal(res[7], undefined)
    t.end()
})