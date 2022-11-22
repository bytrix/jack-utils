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
const { result } = exploreTreeData(tree) // -> [A,B,D,E,C,F,G]
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
```

newTree:
```javascript
[{
	"name": "A",
	"children": [{
		"name": "C",
		"children": [{
			"name": "F"
		}, {
			"name": "G"
		}]
	}]
}]
```