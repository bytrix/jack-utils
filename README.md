# jack-utils

```javascript
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
```

## 获取遍历结果
```javascript
const tree = new Tree({
    data: tree,
    key: 'name'
})
const keys = tree.getKeys() // -> [A,B,D,E,C,F,G]
```

## 遍历节点的回调函数
```javascript
const { tree: newTree } = exploreTreeData(tree, {
    callback: (children, index) => {
        if(children[index]?.name === 'B') {
            return false
        }
        return true
    }
})
const tree = new Tree({
    data: tree,
    key: 'name'
}).walk(([children, index]) => {
    const child = children[index]
    if(child?.name === 'B') {
        return false
    }
    return true
})
// output:
// [{
// 	"name": "A",
// 	"children": [{
// 		"name": "C",
// 		"children": [{
// 			"name": "F",
// 			"children": []
// 		}, {
// 			"name": "G",
// 			"children": []
// 		}]
// 	}]
// }]
```
