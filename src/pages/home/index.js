import React from 'react'
import { render } from 'react-dom';
import store from '../../store'
//导入action构建函数
import { sendAction } from '../../action'

export default class Home extends React.Component {
    ksk = () => {
        const action = sendAction()
        //发送一个action 利用store
        store.dispatch(action)
    };
    componentDidMount(){
        store.subscribe(()=>{
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
        </div>
        )
    }
}