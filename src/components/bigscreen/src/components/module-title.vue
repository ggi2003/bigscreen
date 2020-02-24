<template>
  <div class="wrapper">
        <div class="title"><span class="underline">{{title}}</span></div>
        <!-- <hr class="underline"/> -->
  </div>
</template>

<script >
    export default {
        name: "ModuleTitle",
        props:{
            title:{
                type:String,
                default:' å½ å¤ ç¡® è¯ ç ä¾ ',
            },
        },
    }
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height: 100%;
    // padding: 10px 15px -5px 15px;
    // margin-top:10px;
}
.title{
    padding: 15px 15px 1px 15px;
    margin-bottom: -5px;
    color:rgb(128, 118, 111);
    font: 1.1em  sans-serif;
    font-weight: 600;
    text-align: center;
}
.underline{
    // width:150px;
    padding-bottom: 3px;
    border-bottom:solid 1px rgba(30, 69, 128, 0.8);
}
</style>