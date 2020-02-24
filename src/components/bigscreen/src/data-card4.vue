<template>
  <div class="data-card4-wraper" >
      <data-card  class="nownotarized" :total="nownotarized_num" content="ç°å­ç¡®è¯">
          <span slot="footer">è¾åæ¥<span class="new_notarized">+{{new_notarized}}</span></span>
      </data-card>
      <data-card class="nowsevere" :total="now_severe" content="ç°å­éç">
          <span slot="footer">è¾åæ¥<span class="new_severe">+{{new_severe}}</span></span>
      </data-card>
      <data-card class="cured_num" :total="cured_num" content="ç´¯è®¡æ²»æ">
         <span slot="footer">è¾åæ¥<span class="new_cured">+{{new_cured}}</span></span>
      </data-card>
      <data-card class="dead_num" :total="dead_num" content="ç´¯è®¡æ­»äº¡">
         <span slot="footer">è¾åæ¥<span class="new_dead">+{{new_dead}}</span></span>
      </data-card>
    </div>
</template>

<script>
    import DataCard from "./components/data-card"
    export default {
        name: "DataCard4",
        components:{
            DataCard
        },
        props: {
            nownotarized_num:{
                type: String,
                default: '68000'
            },
            new_notarized:{
                type: String,
                default: '100'
            },
            now_severe:{
                type: String,
                default: '100'
            },
            new_severe:{
                type: String,
                default: '100'
            },
            cured_num:{
                type: String,
                default: '100'
            },
            new_cured:{
                type: String,
                default: '100'
            },
            dead_num:{
                type: String,
                default: '100'
            },
            new_dead:{
                type: String,
                default: '100'
            },

        }
    }
</script>

<style lang="scss" scoped>
.data-card4-wraper{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 20px 10px;
}
.nownotarized{
  border-bottom: solid 1px rgba(30, 69, 128, 0.8);
  margin: 5px;
  /deep/.total{
    color:rgb(240, 93, 9);
    font: 1.5em sans-serif;
  }
  /deep/.data-card-content{
    color:rgba(138, 120, 109, 0.8);
    font: 0.8em  sans-serif;
    font-weight: 800;
  }
  /deep/.data-card-footer{
    color:rgba(255, 220, 200, 0.3);
    font: 0.8em  sans-serif;
  }
  .new_notarized{
    color:rgba(240, 93, 9,1);
  }
}


.nowsevere{
  border-bottom: solid 1px rgba(30, 69, 128, 0.8);
  margin: 5px;
  /deep/.total{
    color:rgb(170, 34, 34);
    font: 1.5em sans-serif;
  }
  /deep/.data-card-content{
    color:rgba(138, 120, 109, 0.8);
    font: 0.8em  sans-serif;
    font-weight: 800;
  }
  /deep/.data-card-footer{
    color:rgba(255, 220, 200, 0.3);
    font: 0.8em  sans-serif;
  }
  .new_severe{
    color:rgba(170, 34,34,0.8);
  }
}


.cured_num{
  margin: 5px;
  /deep/.total{
    color:rgb(65, 184, 162);
    font: 1.5em sans-serif;
  }
  /deep/.data-card-content{
    color:rgba(138, 120, 109, 0.8);
    font: 0.8em  sans-serif;
    font-weight: 800;
  }
  /deep/.data-card-footer{
    color:rgba(255, 220, 200, 0.3);
    font: 0.8em  sans-serif;
  }
  .new_cured{
    color:rgba(65, 184, 162, 0.8);
  }
}


.dead_num{
  margin: 5px;
  /deep/.total{
    color:rgb(55, 63, 80);
    font: 1.5em sans-serif;
  }
  /deep/.data-card-content{
    color:rgba(138, 120, 109, 0.8);
    font: 0.8em  sans-serif;
    font-weight: 800;
  }
  /deep/.data-card-footer{
    color:rgba(255, 220, 200, 0.3);
    font: 0.8em  sans-serif;
  }
  .new_dead{
    color:rgba(72, 94, 140,0.8);
  }
}
</style>