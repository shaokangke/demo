//这个文件是构建store关联action和reducer

import {createStore} from 'redux';

//导入自己创建好的 reducer

import {reducer} from '../reducer';

//构建store
const store = createStore(reducer);

export default store