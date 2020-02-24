<template>
    <div class="citywrapper0"> 
        <ModuleTitle :title="title"/>
        <div  class="cpsulechats1" ><capsule-chart  :config="config"></capsule-chart></div>
    </div>
</template>

<script>
import ModuleTitle from "./components/module-title"
import CapsuleChart from './components/capsule-chart'
export default {
    name:"CityCapsule",
    components:{
        ModuleTitle,
        CapsuleChart,
    },
    props:{
        selectedProvince:{
            type:String,
            default:'',
        }
    },
    watch:{
        selectedProvince:{
            handler(newVal,oldVal){
                if(newVal!=oldVal){ //0.çå¬å½selectedProvinceååå
                //1.ajaxéæ°è·åè¯¥ççææåå¸åè¡¨ï¼å«ååå¸çç¸å³æ°æ®ï¼
                //2.æ ¼å¼åå½åçæ°æ®ä¸ºå¾æ å¯ç¨çæ°æ®ï¼å¹¶èµå¼ç»config
                this.config = {
                    data: newVal.data,
                    colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                    unit: newVal.unit,
                }
                //3.éæ°åå§åchartå¾
                //4.éæ°setConfig
                }
            }
        }
    },
    data(){return{
        title:'åå¸åè¡¨',
        config:{
            data: [
                {
                name: 'åé³',
                value: 167
                },
                {
                name: 'å¨å£',
                value: 123
                },
                {
                name: 'æ¼¯æ²³',
                value: 98
                },
                {
                name: 'éå·',
                value: 75
                },
                {
                name: 'è¥¿å³¡',
                value: 66
                },
            ],
            colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            unit: 'åä½'
        },
    }},
}
</script>

<style lang="less" scoped>
.citywrapper0{
    width:100%;
    height:100%;
    // border:2px solid red;
    padding-top:0px;
    // position: relative;
    // border-radius: 6px;
    // display: -webkit-box;
    display: flex;
    flex-direction: column;
    // -webkit-box-pack: center;
    // justify-content: center;
    // -webkit-box-align: center;
    // align-items: center;
    /deep/.title{
        padding: 25px 15px -5px 15px;
        margin-bottom: -5px;
        color:rgb(214, 117, 52);
        font: 1.1em  sans-serif;
        font-weight: 600;
        text-align: center;
    }
    /deep/.underline{
        display: none;
        border:2px solid red;
        width:120px;
        height: 10px;
    }
}
.cpsulechats1{
    width:100%;
    height:100%;
    // border:1px solid red;
    margin: -325px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    color:rgba(91, 91, 97, 1);
    /deep/.dv-capsule-chart{
        height: 100%;
        // border:1px solid white;
        color:rgb(129, 129, 148);
    }
}
</style>