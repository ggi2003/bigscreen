<template>
  <div class="time">{{currTimess}} </div>
</template>

<script >
    import moment from 'moment';
    export default {
        name: "DataTimeCard",
        data(){
            return{
                currTimess:'2019-02-19 14:26',
            }
        },
        mounted(){
            let _this = this;
            setInterval(() => {
            _this.currTimess= moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
            }, 1000);
        },
    }
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DS-DIGI-1';
  src: url('../assets/fonts/DS-Digital/DS-DIGI-1.ttf');
}
.time {
  color: rgba(155,155,155,1);
  display: inline;
  font-family: "DS-DIGI-1";
  font-size: 26px;
}

</style>