import React from 'react'
import echarts from 'echarts'

class Sixth extends React.Component {
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
            backgroundColor: "#ffffff",
            color: ["#37A2DA", "#FF9F7F"],
            tooltip: {},
            xAxis: {
                show: false
            },
            yAxis: {
                show: false
            },
            legend: {
                data: ['预算', '开销'],
                
            },
            radar: {
                // shape: 'circle',
                indicator: [{
                        name: '食品',
                        max: 500
                    },
                    {
                        name: '玩具',
                        max: 500
                    },
                    {
                        name: '服饰',
                        max: 500
                    },
                    {
                        name: '绘本',
                        max: 500
                    },
                    {
                        name: '医疗',
                        max: 500
                    },
                    {
                        name: '门票',
                        max: 500
                    }
                ]
            },
            series: [{
                name: '预算 vs 开销',
                type: 'radar',
                data: [{
                        name:'预算',
                        value: [430, 340, 500, 300, 490, 400],
                        // name: '预算'
                    },
                    {
                        name:'开销',
                        value: [300, 430, 150, 300, 420, 250],
                        // name: '开销'
                    }
                ]
            }, {
                type: 'line',
                name: '预算',
                data: [],
                itemStyle: {
                    normal: {
                        color: '#37A2DA'
                    }
                }
            }, {
                type: 'line',
                data: [],
                name: '开销',
                itemStyle: {
                    normal: {
                        color: '#FF9F7F'
                    }
                }
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

export default Sixth