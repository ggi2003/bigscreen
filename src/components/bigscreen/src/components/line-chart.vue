<template>
    <div class="linechartWrapper" > 
        <div class="echartstyle0" :id="id" :option="option" :chatsData="chatsData"></div>
    </div>
</template>

<script>
import echarts from "echarts"
export default {
    name:"LineChart",
    components:{
    },
    props:{
        id:{
            type:String,
            default:'',
        },
        chatsData:{
            type:Object,
            default:()=>{return{
                title:{
                    type:String,
                    default:'å¤§æ°æ®èæåæä¹ââç«ææç¹',
                },
                legendData:{
                    type:Object,
                    default:()=>{return [
                        {
                        name:'æé«æ°æ¸©',
                        // icon:'path://M0,0 m-0.2,0 a0.2,0.2 0 1,0 0.4,0 a0.2,0.2 0 1,0 -0.4,0',
                        }, 
                        {name:'æä½æ°æ¸©',
                        // icon:'path://M0,0  a0.1,0.1 0 0.1,0 -0.1,0 a0.1,0.1 0 -0.1,0 0.1,0 ',
                        }
                    ]}
                },
                xaxisData:{
                    type:String,
                    default:['å¨ä¸', 'å¨äº', 'å¨ä¸', 'å¨å', 'å¨äº', 'å¨å­', 'å¨æ¥'],
                },
                yaxisUnit:{
                    type:String,
                    default:'',
                },
                seriesData:{
                    type:Object,
                    default:()=>{return [
                            {
                                name: 'æé«æ°æ¸©',
                                type: 'line',
                                data: [11, 11, 15, 13, 12, 13, 10],
                            },
                            {
                                name: 'æä½æ°æ¸©',
                                type: 'line',
                                data: [1, -2, 2, 5, 3, 2, 0],
                            }
                        ]
                    }
                },
            }}
        },
        option:{
            type:Object,
            default:null,
        }
    },
    data(){
        return{
            myChart:null,
            defaultOption:{
                // backgroundColor:'rgba(50, 50, 189, 0.2)',
                textStyle:{
                    color:'rgba(129, 129, 148, 1)',
                },
                grid:{
                    show:false,
                    containLabel:true,
                    top:65,
                    bottom:40,
                    left:10,
                    right:15,
                    borderColor:'rgba(30, 69, 128, 0.8)',
                    borderWidth:1,
                },
                title: {
                    text: this.chatsData.title.default,
                    padding:[10, 10, 5, 10],
                    // borderColor: '#ccc' ,
                    // borderWidth: 1 ,
                    left:'center',
                    textStyle:{
                        color:'rgba(129, 129, 148, 1)',
                        fontWeight:600,
                        fontSize:15,
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top:38,
                    textStyle:{
                        color:'rgba(129, 129, 148, 1)',
                    },
                    data: [
                        {
                        name:'æé«æ°æ¸©',
                        // icon:'path://M0,0 m-0.2,0 a0.2,0.2 0 1,0 0.4,0 a0.2,0.2 0 1,0 -0.4,0',
                        }, 
                        {name:'æä½æ°æ¸©',
                        // icon:'path://M0,0  a0.1,0.1 0 0.1,0 -0.1,0 a0.1,0.1 0 -0.1,0 0.1,0 ',
                        }
                    ],
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data:this.chatsData.xaxisData.default,
                    splitLine: {
                        lineStyle: {
                            // é´éçº¿é¢è²
                            color: 'rgba(30, 69, 128, 0.8)',
                            width:1,
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'+this.chatsData.yaxisUnit.default,
                    },          
                    splitLine: {
                        lineStyle: {
                            // é´éçº¿é¢è²
                            color: 'rgba(30, 69, 128, 0.8)',
                            width:1,
                        }
                    },
                },
                series: [
                    {
                        name: 'æé«æ°æ¸©',
                        type: 'line',
                        data: [11, 11, 15, 13, 12, 13, 10],
                        showSymbol: false,
                        clip: true,
                        smooth:true,
                        // areaStyle: {},
                        lineStyle:{
                            width:1,
                        },
                    },
                    {
                        name: 'æä½æ°æ¸©',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        showSymbol: false,
                        clip: true,
                        smooth:true,
                        // areaStyle: {},
                        lineStyle:{
                            width:1,
                        },
                    },
                ]
            },
        }
    },
    watch:{
        id:{
            handler(id,oldValue){
                if(id!=oldValue){
                    console.log("watch:id="+id)
                    this.initChats(this.id);
                }
            },
            deep:true,
        },
        chatsData:{
            handler(chatsData,oldValue){
                console.log("watch:chatsData="+JSON.stringify(chatsData))
                this.fillOption(chatsData);
                console.log("watch:id="+JSON.stringify(this.defaultOption))
                this.reSetOption(this.defaultOption);
            },
            deep:true,
        },
        option:{
            handler(newValue,oldValue){
                console.log("watch:option="+JSON.stringify(newValue))
                this.reSetOption(newValue);
            },
            deep:true,
        },
    },
    mounted(){
        this.initChats(this.id);
        this.reSetOption(this.defaultOption);
    },
    methods:{
        initChats(id){
            console.log("initChats:id="+id);
            // åºäºåå¤å¥½çdomï¼åå§åechartså®ä¾
            this.myChart = echarts.init(document.getElementById(id));
        },
        reSetOption(option){
            console.log("reSetOption:option="+JSON.stringify(option))
            window.onresize = this.myChart.resize;
            this.myChart.setOption(option);
        },
        fillOption(chatsData){
            this.defaultOption
                .title.text = chatsData.title
                .legend.Data = chatsData.legendData
                .xAxis.Data = chatsData.xaxisData
                .yAxis.axisLabel.formatter =  '{value}'+this.chatsData.yaxisUnit;
            this.defaultOption.series = ()=>{
                let seriesTemp =null;
                chatsData.seriesData.forEach(element => {
                    let serieTemp={
                        name: element.name,
                        type: element.type,
                        showSymbol: false,
                        clip: true,
                        smooth:true,
                        // areaStyle: {},
                        data: element.data,
                        lineStyle:{
                            width:1,
                        },
                    }
                    seriesTemp.add(serieTemp);
                });
                return seriesTemp;
            };
        }
    }
  
}
</script>

<style lang="less" scoped>
.linechatWrapper{
    padding-top:0px;
    // display: flex;
    // flex-direction: column;
    // width:100%;
}
.echartstyle0{
    margin:5px;
    width:97%;
    height:235px;
    border:1px solid;
    border-radius:30px;
    padding: 0px 0px 0px 0px;
    color:rgb(35, 35, 189);
}
</style>