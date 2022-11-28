const mergeTree = (a, b, _config = {}) => {
    const config = {}
    config.children = _config.children || 'children'
    config.key = _config.key || 'name'
    if (!Array.isArray(a)) a = [a];
    if (!Array.isArray(b)) b = [b];
    return [...a, ...b].reduce((r, o) => {
        r = r || []
        const item = r.find((item) => {
            if(item?.[config.key]) {
                return o?.[config.key] === item?.[config.key]
            }
            return false
        });
        if (item && item[config.children]) {
            item[config.children] = mergeTree(item?.[config.children], o?.[config.children])
        } else if(o) {
            r.push(o)
        };
        return r;
    }, undefined);
}
export default mergeTree