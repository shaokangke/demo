import React from "react";
import echarts from "echarts";

class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.ksk();
    this.ksk2();
  }
  ksk = () => {
    var myChart = echarts.init(document.getElementById("main"));

    myChart.setOption({
      title: {
        text: "基础用法",
      },
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#92CEFF", "#6084E0"],
      series: [
        {
          label: {
            normal: {
              fontSize: 18,
            },
          },
          type: "pie",
          center: ["50%", "50%"],
          data: [
            {
              value: 55,
              name: "北京",
            },
            {
              value: 20,
              name: "武汉",
            },
            {
              value: 10,
              name: "杭州",
            },
            {
              value: 20,
              name: "广州",
            },
            {
              value: 38,
              name: "上海",
            },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 2, 2, 0.3)",
            },
          },
        },
      ],
    });
  };

  ksk2 = () => {
    var myChart = echarts.init(document.getElementById("main2"));

    myChart.setOption({
      title: {
        text: "同心圆饼图",
        x: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: [
          "直达",
          "营销广告",
          "搜索引擎",
          "邮件营销",
          "联盟广告",
          "视频广告",
          "百度",
          "谷歌",
          "必应",
          "其他",
        ],
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],

          label: {
            normal: {
              position: "inner",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: "直达", selected: true },
            { value: 679, name: "营销广告" },
            { value: 1548, name: "搜索引擎" },
          ],
        },
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "55%"],

          data: [
            { value: 335, name: "直达" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1048, name: "百度" },
            { value: 251, name: "谷歌" },
            { value: 147, name: "必应" },
            { value: 102, name: "其他" },
          ],
        },
      ],
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div id="main" style={{ width: "600px", height: "400px" }}></div>
        <div id="main2" style={{ width: "600px", height: "400px" }}></div>
      </div>
    );
  }
}

export default Third;
