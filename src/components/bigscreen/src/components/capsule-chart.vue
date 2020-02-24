<template>
    <div class="capsulechartWrapper" > 
        <dv-capsule-chart class="capsulechart1" :config="config" />
    </div>
</template>

<script lang="ts">
export default {
    name:"CapsuleChart",
    components:{
    },
    props:{
        config:{
            type:Object,
            default:()=>{return{
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
            }}
        },
    },
    data(){
        return{
            myChart:null,
            
        }
    },
    watch:{
        
    },

    methods:{
        
    }
  
}
</script>

<style lang="less" scoped>
.capsulechartWrapper{
    padding-top:0px;
    width:100%;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // width:100%;
}
.capsulechart0{
    margin:5px;
    width:300px;
    height:200px;
    border:1px solid;
    border-radius:30px;
    padding: 0px 0px 0px 0px;
    color:rgb(35, 35, 189);
    /deep/.unit-label{
        color:red;
    }
}
</style>