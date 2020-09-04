import React from 'react'
import './first.css'
import { Row, Col } from 'antd'
class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ['https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',


            ]
        };
    }
    render() {
        const { arr } = this.state;
        const style = { background: '#0092ff', padding: '8px 0' };

        return (
            <div>
                <Row gutter={[16, 16]}>
                    {arr && arr.map((item, index) => (
                        <Col key={index} span={6}><img  src={item} className='pic' /></Col>
                    ))}
                </Row>


            </div>
        )
    }
}

export default First