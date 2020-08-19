
//这个文件是 创建reducer函数，专门处理发送过来的 action
const initstate = {
    value: '初始化默认值',
};
const reducer = (state = initstate, action) => {
    console.log("reducer",state, action)
    switch (action.type) {
        case 'send_type': return Object.assign({}, state, action)
        default: return state
    }
}
module.exports = {
    reducer
};