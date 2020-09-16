import React from 'react'
import './first.css'
import echarts from 'echarts'
import { Row, Col } from 'antd'


class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.ksk()
        this.ksk2()
        this.ksk3()
        this.ksk4()
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
                name: '周几',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                x: 'center',
                type: 'value',
                name: '数量',
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

    ksk2 = () => {
        var myChart = echarts.init(document.getElementById("main2"));

        myChart.setOption({
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高气温', '最低气温']
            },
            toolbox: { //图像工具栏
                show: true,
                feature: {
                    dataZoom: {},
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name: '最高气温',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]

        });

    }

    ksk3 = () => {
        var myChart = echarts.init(document.getElementById("main3"));

        myChart.setOption({
            title: {
                text: '面积图',
            },
            backgroundColor: "#ffffff",
            color: ["#FFC25C", "#FD666D"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left: 'center',
                y: "2%",
                data: ['Coffee', 'Tea']
            },
            xAxis: {
                type: 'category',

                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    interval: 0
                },
                data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            grid: {
                containLabel: true
            },
            yAxis: {

            },
            series: [{
                name: 'Coffee',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: "0.6",
                    }
                },
                data: [13, 25, 18, 20, 60, 30, 37, 50, 76, 30, 46, 75, 87,]
            },

            {
                name: 'Tea',
                type: 'line',
                symbolSize: 0,
                symbol: 'circle',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: "0.5",
                    }
                },
                data: [7, 18, 28, 14, 30, 50, 32, 36, 50, 70, 36, 56, 70, 72]
            }
            ]

        });

    }

    ksk4 = () => {
        var myChart = echarts.init(document.getElementById("main4"));

        myChart.setOption({
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]

        });

    }


    render() {
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginTop: '30px'
            }}>
                <div id="main" style={{ width: "600px", height: '400px' }}></div>
                <div id="main2" style={{ width: "600px", height: '400px' }}></div>
                <div id="main3" style={{ width: "600px", height: '400px' }}></div>
                <div id="main4" style={{ width: "600px", height: '400px' }}></div>


            </div>
        )
    }
}

export default First