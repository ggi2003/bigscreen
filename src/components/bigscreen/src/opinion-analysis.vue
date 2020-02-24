<template>
    <div class="opinionstyle0"> 
        <ModuleTitle :title="title"/>
        <line-chart class="linechats1" :id="id1" :chatsData="chatsData1"></line-chart>
        <line-chart class="linechats2" :id="id2"  :chatsData="chatsData2"></line-chart>
        
    </div>
</template>

<script>
import ModuleTitle from "./components/module-title"
import LineChart from './components/line-chart'
export default {
    name:"OpinionAnalysis",
    components:{
        ModuleTitle,
        LineChart,
    },
    data(){return{
        id1:'linecharts1',
        id2:'linecharts2',
        title:'å¤§æ°æ®èæåæä¹ââç«ææç¹',
        chatsData1:{
            title:{
                type:String,
                default:'å¨å½ââç«ææç¹',
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
        },
        chatsData2:{
            title:{
                type:String,
                default:'æ¹åââç«ææç¹',
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
        },
    }},
}
</script>

<style lang="less" scoped>
.opinionstyle0{
    padding-top:0px;
    display: flex;
    flex-direction: column;
    width:100%;
    /deep/.title{
        padding: 25px 15px -5px 15px;
        margin-bottom: -5px;
        color:rgb(18, 158, 135);
        font: 1.1em  sans-serif;
        font-weight: 600;
        text-align: center;
    }
    /deep/.underline{
        float:left;
        margin-bottom: 10px;
    }
}
.linechats1{
    // border:1px solid red;
    /deep/.echartstyle0{
        margin:0px 0px 0px 5px;
        padding: 5px 0px 0px 0px;
        height: 210px;
        border:0px solid rgb(59, 74, 209);
    }
}
.linechats2{
    // border:1px solid red;
    /deep/.echartstyle0{
        margin:0px 0px 0px 5px;
        padding: 5px 0px 0px 0px;
        height:210px;
        border:0px solid rgb(59, 74, 209);
    }
}
</style>