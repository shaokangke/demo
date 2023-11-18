import React from 'react'
import store from '../../store'
//导入action构建函数
import { sendAction } from '../../action'
import Axios from 'axios';

export default class Home extends React.Component {


    ksk(){
        console.log(第三次提交);
        console.log(第四次提交);
        console.log(第五次提交);
        console.log(第6次提交); 

    }


    //练习 git 操作

    kk = () => {
        Axios.get('https://www.baifubao.com/callback?cmd=1059&callback=phone&phone=18156200568')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    ksk = () => {
        const action = sendAction()
        //发送一个action 利用store
        store.dispatch(action)
    };
    componentDidMount() {
        store.subscribe(() => {
            console.log("subscribe", store.getState())
            this.setState({})
        })
        this.setState()
    }
    render() {
        return (
            <div>
                <button onClick={this.ksk}>{store.getState().value}</button>
                <div>{store.getState().type}</div>
                <button onClick={()=>this.kk()}>get</button>
                <button>post</button>

            </div>
        )
    }
}