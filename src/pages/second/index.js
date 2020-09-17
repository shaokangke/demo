import React from "react";
import echarts from "echarts";

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }
  componentDidMount() {
    // console.log(this.props);
    // let id = this.props.match.params.id;
    // this.setState({ id });
    this.ksk();
    this.ksk2();
    this.ksk3();
    this.ksk4();
    this.ksk5();
    this.ksk6();
  }
  ksk = () => {
    var myChart = echarts.init(document.getElementById("main"));

    myChart.setOption({
      title: {
        text: "基础用法",
      },
      backgroundColor: "#ffffff",
      color: ["#37A2DA"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["邮件营销"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16,
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16,
            },
          },
        },
      ],
      series: [
        {
          name: "邮件营销",
          type: "bar",
          barWidth: "70%",
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    });
  };

  ksk2 = () => {
    var myChart = echarts.init(document.getElementById("main2"));

    myChart.setOption({
      title: {
        text: "横向",
      },
      backgroundColor: "#ffffff",
      color: ["#EA9948"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: "{a} <br/>{b} :人",
      },

      grid: {
        containLabel: true,
      },
      xAxis: {
        type: "value",
        // boundaryGap: [0, 0.01],
        axisLabel: {
          interval: 0,
          formatter: "{value}",
        },
      },
      yAxis: {
        type: "category",
        data: [
          "清华大学",
          "北京大学",
          "复旦大学",
          "上海交通大学",
          "同济大学",
          "浙江大学",
          "中国人民大学",
          "北京外国语大学",
          "中山大学",
          "上海财经大学",
        ].reverse(),
      },
      series: [
        {
          name: "",
          type: "bar",
          //  barCategoryGap: '30%',
          data: [977, 972, 744, 710, 697, 437, 304, 252, 200, 102].reverse(),
        },
      ],
    });
  };

  ksk3 = () => {
    var myChart = echarts.init(document.getElementById("main3"));

    myChart.setOption({
      title: {
        text: "双向柱图 纵向",
      },
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#FF9F7F"],
      legend: {
        orient: "vertical",
        x: "90%",
        top: "48%",
        data: ["收入", "支出"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        right: "14%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "收入",
          type: "bar",
          stack: "总量",
          barWidth: "70%",
          label: {
            normal: {
              show: true,
              position: "top",
            },
          },
          data: [320, 100, 200, 270, 320, 250, 360],
        },
        {
          name: "支出",
          type: "bar",
          stack: "总量",
          barWidth: "70%",
          label: {
            normal: {
              show: true,
              position: "bottom",
            },
          },
          data: [-120, -132, -100, -130, -300, -230, -360],
        },
      ],
    });
  };
  ksk4 = () => {
    var myChart = echarts.init(document.getElementById("main4"));

    myChart.setOption({
      title: {
        text: "双向柱图 横向",
      },
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#FF9F7F"],
      legend: {
        data: ["支出", "收入"],
        x: "43%",
      },
      grid: {
        containLabel: true,
      },
      xAxis: [
        {
          type: "value",
        },
      ],
      yAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      series: [
        {
          name: "收入",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "right",
            },
          },
          data: [320, 202, 241, 274, 290, 250, 380],
        },
        {
          name: "支出",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "left",
            },
          },
          data: [-120, -132, -101, -134, -290, -230, -310],
        },
      ],
    });
  };

  ksk5 = () => {
    var myChart = echarts.init(document.getElementById("main5"));

    myChart.setOption({
      title: {
        text: "堆叠图",
      },
      backgroundColor: "#ffffff",
      color: ["#37A2DA", "#FF9F7F"],
      legend: {
        data: ["女生", "男生"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["篮球", "排球", "足球", "羽毛球", "乒乓球", "跆拳道"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "男生",
          type: "bar",
          stack: "总量",
          barWidth: "70%",
          itemStyle: {
            //柱状图上显示比列和name
            normal: {
              label: {
                show: true,
                position: "inside",
                formatter: function (params) {
                  return params.seriesName + "\n" + params.value + "%";
                },
              },
            },
          },
          data: [14, 10, 16, 7, 15, 9],
        },
        {
          name: "女生",
          type: "bar",
          stack: "总量",
          barWidth: "70%",
          data: [12, 14, 6, 13, 4, 9],
        },
      ],
    });
  };
  ksk6 = () => {
    var myChart = echarts.init(document.getElementById("main6"));

    myChart.setOption({
      backgroundColor: "#333",
      textStyle: {
        color: "#fff",
        fontSize: "26",
      },
      color: ["#6E9D4E", "#EDDB4F", "#F7923A", "#F14747"],
      title: {
        text: "分组柱状图",
        x: "2%",
        y: "1%",
        textStyle: {
          color: "#fff",
          fontSize: "26",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          textStyle: {
            color: "#fff",
            fontSize: "26",
          },
        },
      },
      legend: {
        data: ["猕猴桃", "香蕉", "橙子", "草莓"],
        align: "right",
        right: "1%",
        top: "3%",
        textStyle: {
          color: "#fff",
          fontSize: "16",
        },
      },
      grid: {
        left: "3%",
        right: "%",
        top: "15%",

        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          data: ["第一周", "第二周", "第三周", "第四周"],
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value}",
          },
        },
      ],
      series: [
        {
          name: "猕猴桃",
          type: "bar",
          data: [60, 110, 180, 100],
        },
        {
          name: "香蕉",
          type: "bar",
          data: [90, 130, 170, 130],
        },
        {
          name: "橙子",
          type: "bar",
          data: [120, 160, 140, 160],
        },
        {
          name: "草莓",
          type: "bar",
          data: [110, 190, 90, 100],
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
        <div id="main3" style={{ width: "600px", height: "400px" }}></div>
        <div id="main4" style={{ width: "600px", height: "400px" }}></div>
        <div id="main5" style={{ width: "600px", height: "400px" }}></div>
        <div id="main6" style={{ width: "600px", height: "400px" }}></div>
      </div>
    );
  }
}

export default Second;
