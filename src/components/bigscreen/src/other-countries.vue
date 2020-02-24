<template>
    <div class="dvscrolwrapper0" width="100%" > 
        <ModuleTitle :title="title"/>
        <div class="dvscrolstyle0" ><dv-scroll-ranking-board :config="config" /></div>
    </div>
</template>

<script>
import ModuleTitle from "./components/module-title"

export default {
    name:"OtherCountries",
    components:{
        ModuleTitle
    },
    props:{
        title:{
            type:String,
            default:' å½ å¤ ç¡® è¯ ç ä¾ ',
        },
        config:{
            type:[Object,Object],
            default: ()=>{return{
                rowNum:5,
                waitTime:5000,
                carousel:'page',
                unit:'ä¾',
                sort:true,
                data: [
                    {
                    name: 'å¨å£',
                    value: 55
                    },
                    {
                    name: 'åé³',
                    value: 120
                    },
                    {
                    name: 'è¥¿å³¡',
                    value: 78
                    },
                    {
                    name: 'é©»é©¬åº',
                    value: 66
                    },
                    {
                    name: 'æ°ä¹¡',
                    value: 80
                    },
                    {
                    name: 'ä¿¡é³',
                    value: 45
                    },
                    {
                    name: 'æ¼¯æ²³',
                    value: 29
                    }
                ]
            }}
        },
    }
  
}
</script>

<style lang="less" scoped>
.dvscrolwrapper0{
    padding-top:0px;
    /deep/.title{
        padding: 25px 15px -5px 15px;
        margin-bottom: -5px;
        color:rgb(214, 117, 52);
        font: 1.1em  sans-serif;
        font-weight: 600;
        text-align: center;
    }
    /deep/.underline{
        width:120px;
    }
}
.dvscrolstyle0{
    // border:1px solid red;
    padding: 5px 25px 0px 25px;
    height:200px;
    color:rgba(91, 91, 97, 1);
    /deep/.dv-scroll-ranking-board{
        color:rgb(129, 129, 148);
        // border:1px solid white;
        height: 100%;
    }
}

</style>