const mergeTree = (a, b) => {
    if (!Array.isArray(a)) a = [a];
    if (!Array.isArray(b)) b = [b];
    return [...a, ...b].reduce((r, o) => {
        r = r || []
        const item = r.find((item) => {
            if(item?.name) {
                return o?.name === item?.name
            }
            return false
        });
        if (item) {
            item.children = mergeTree(item.children, o.children)
        } else if(o) {
            
            r.push(o)
        };
        return r;
    }, undefined);
}
export default mergeTree