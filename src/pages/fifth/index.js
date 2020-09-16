import React from 'react'
import echarts from 'echarts'

class Fifth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

        this.ksk()


    }
    ksk = () => {
        var myChart = echarts.init(document.getElementById("main"));

        myChart.setOption({
            backgroundColor: "#fff",
            // color: ["#37A2DA"],
            color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
            legend: {
 
                data: ['A商品', 'B商品', 'C商品']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                x: 'center',
                type: 'value',
            },
            // series: [{
            //     name: '销量',
            //     type: 'line',
            //     data: [20, 80, 51, 90, 80, 30, 20]
            // }]
            series: [{
                name: 'A商品',
                type: 'line',
                smooth: true,
                data: [18, 36, 65, 70, 78, 40, 33]
            }, {
                name: 'B商品',
                type: 'line',
                smooth: true,
                data: [12, 50, 51, 55, 70, 30, 20]
            }, {
                name: 'C商品',
                type: 'line',
                smooth: true,
                data: [10, 30, 31, 50, 40, 20, 10]
            }]


        });

    }
    

    render() {
        return (
            <div>
                <div id="main" style={{ width: "600px", height: '400px' }}></div>
                <div id="main2" style={{ width: "600px", height: '400px' }}></div>
                <div id="main3" style={{ width: "600px", height: '400px' }}></div>

            </div>
        )
    }
}

export default Fifth