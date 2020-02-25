<template>
  <div class="echarts">
    <div :style="{height:'450px',width:'100%'}" :selectedArea='selectedArea' ref="myEchart"></div>
  </div>
</template>

<script>
  import echarts from "echarts";
  //   import 'echarts/map/js/world'
  import 'echarts/map/js/china' // å¼å¥ä¸­å½å°å¾æ°æ®
  export default {
    name: "ChinaMap",
    props: {
        splitsList: {
            type: [Object, Array],
            default: ()=>{return [  {
                start : 0,
                end : 0,
                label : '0',
                color : 'rgba(245, 245, 245, 0.1)'
              },{
                start : 1,
                end : 9,
                label : '1-9',
                color : 'rgba(251, 238, 211, 0.3)'
              },{
                start : 10,
                end : 99,
                label : '10-99',
                color : 'rgba(242, 168, 140, 0.4)'
              }, {
                start : 100,
                end : 499,
                label : '100-499',
                color : 'rgba(226, 101, 84, 0.5)'
              }, {
                start : 500,
                end : 999,
                label : '500-999',
                color : 'rgba(201, 47, 49, 0.6)'
              }, {
                start : 1000,
                end : 9999,
                label : '1000-9999',
                color : 'rgba(118, 22, 27, 0.7)'
              }, {
                start : 10000,
                end : 100000,
                label : '>=10000',
                color : 'rgba(79, 8, 13, 0.8)'
              }]}
        },
        userJson: {
            type: [Object, Array],
            default:  ()=>{return [{
                "name": "北京",
                "value": 599
              }, {
                "name": "上海",
                "value": 142
              }, {
                "name": "黑龙江",
                "value": 44
              }, {
                "name": "深圳",
                "value": 92
              }, {
                "name": "湖北",
                "value": 810
              }, {
                "name": "四川",
                "value": 453
              }]}
        }
    },
    data() {
      return {
        myChart: null
      };
    },
    mounted() {
      this.chinaConfigure();

    },
    beforeDestroy() {
      if (!this.myChart) {
        return;
      }
      this.myChart.dispose();
      this.myChart = null;
    },
    methods: {
      chinaConfigure() {
        console.log(this.userJson)
        this.myChart = echarts.init(this.$refs.myEchart); //è¿éæ¯ä¸ºäºè·å¾å®¹å¨æå¨ä½ç½®    
        window.onresize = this.myChart.resize;
        this.myChart.setOption({ // è¿è¡ç¸å³éç½®
          backgroundColor: 'rgba(255,0,0,0)',  //å°å¾å¤çèæ¯è²
          tooltip: {}, // é¼ æ ç§»å°å¾éé¢çæµ®å¨æç¤ºæ¡
          dataRange: {
            show: true,
            min: 0,
            max: 1000,
            // text: ['High', 'Low'],
            textStyle : {
              color : '#fff'
            },
            realtime: true,
            calculable: false,
            // color: ['orangered', 'yellow', 'lightskyblue'],
            x: 'left',
            y: '230px',
            splitList : this.splitsList,
          },
          toolbox: {
            show : true,
            orient : 'vertical',
            x : '600px',
            y : '400px',
            feature : {
              mark : {
                show : false
              },
              dataView : {
                show : false,
                readOnly : false
              },
              restore : {
                show : true
              },
              saveAsImage : {
                show : true
              }
            }
          },
          geo: { // è¿ä¸ªæ¯éç¹éç½®åº
            map: 'china', // è¡¨ç¤ºä¸­å½å°å¾
            roam: false,//ç¦æ­¢æå¨åç¼©æ¾
            label: {
              normal: {
                show: true, // æ¯å¦æ¾ç¤ºå¯¹åºå°å
                textStyle: {
                  color: 'rgba(80, 110, 160, 1)',
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(121, 150, 200, 1)',
                areaColor:  'rgba(0, 0, 0, 0.2)'  //å°å¾åºåä¸çé¢è²
              },
              emphasis: {
                areaColor:  'rgba(0, 0, 0, 0.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // å¯¹åºä¸æ¹éç½®
            },
            {
              name: 'å¯å¨æ¬¡æ°', // æµ®å¨æ¡çæ é¢
              type: 'map',
              geoIndex: 0,
              data: this.userJson
            }
          ]
        }),
        this.myChart.on('click', this.geoselectchanged);
      },
      geoselectchanged(params){
            this.selectedArea = params.name;
            // console.log(this.selectedArea);
      }
    },
    computed: {
      selectedArea:{
        get:function(newVal){
          return newVal;
        },
        set:function(newVal){
          console.log("newVal="+newVal)
          this.$emit('update:selectedArea', newVal)
        },

      },
    }
  }
</script>

<style lang="less" scoped>
.echarts{
  // border: 1px solid red;
  margin-left:50px;
  margin-top:-30px;
}
</style>