<template>
  <dv-full-screen-container>
  <!--//å¤§å±ç»ä»¶-->
  <div class="back">
    <dv-border-box-11 title="疫 情 汇 总 大 屏" :titleWidth="400">
      <div class="row">
        <div class="left col">
          <div class="yiqing-zonghe in-up">
            <dv-border-box-10 :color="[, '#273d7b']">
              <data-card4 :width="100"></data-card4>
            </dv-border-box-10>
          </div>
          <div class="yiqing-city-list in-down">
            <dv-border-box-12 :color="[, '#273d7b']">
              <OpinionAnalysis></OpinionAnalysis>
            </dv-border-box-12>
          </div>
        </div>
        <div class="center col">
          <DataTimeCard class="datetime"></DataTimeCard>
          <div class="yiqing-map in-up">
            <!-- <china-map :selectedArea.sync="selectedArea" :userjson="userjson"></china-map> -->
            <china-map :selectedArea.sync="selectedArea"></china-map>
          </div>
          <div class="yiqing-other-list in-down">
            <dv-border-box-13 :color="[, '#273d7b']">
              <!-- <city-capsule :selectedProvince="selectedArea"></city-capsule> -->
              <ve-line class="veline" width="300px" height="300px"  :data="chartData" :settings="chartSettings"></ve-line>
            </dv-border-box-13>
          </div>
        </div>
        <div class="right col">
          <div class="yiqing-chant in-up">
            <dv-border-box-12 :color="[, '#273d7b']">
              <other-countries></other-countries>
            </dv-border-box-12>
          </div>
          <div class="yiqing-chant2">
            <dv-border-box-8 :color="[, '#273d7b']">
              <slot></slot>
            </dv-border-box-8>
          </div>
          <div class="yiqing-airticle in-down">
            <dv-border-box-10 :color="[, '#273d7b']">
              <slot></slot>
            </dv-border-box-10>
          </div>
        </div>
      </div>
    </dv-border-box-11>
  </div>
  </dv-full-screen-container>
</template>

<script>
import ChinaMap from "./src/china-map";
import DataCard4 from "./src/data-card4";
import OtherCountries from "./src/other-countries";
import DataTimeCard from "./src/components/date-time";
import OpinionAnalysis from "./src/opinion-analysis";
import CityCapsule from "./src/city-capsule";
export default {
  name: "BigscreenIndex",
  components: {
    ChinaMap,
    DataCard4,
    OtherCountries,
    DataTimeCard,
    OpinionAnalysis,
    CityCapsule
  },
  data() {
    return {
      isPhone: false,
      userjson: null,
      selectedArea: "",
      chartData:{
        columns:['日期','成本','利润','占比','其他'],
        rows:[{'成本':1523,'日期':'1月1日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1511,'日期':'1月2日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1523,'日期':'1月3日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1533,'日期':'1月4日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1543,'日期':'1月5日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1553,'日期':'1月6日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1563,'日期':'1月7日','利润':1333,'占比':0.33,'其他':100},
          {'成本':1573,'日期':'1月8日','利润':1333,'占比':0.33,'其他':100},
          ], 
      },
      chartSettings:{
        metrics:['成本','利润'],
        dimension:['日期'],
      }
    };
  },
  mounted() {
    this.isPhone = this.isPhoneUser();
  },
  methods: {
    isPhoneUser() {
      //判断是否来自手机端
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  watch: {
    selectedArea(newVal) {
      console.log(this.selectedArea);
    }
  }
};
</script>

<style lang="scss" scoped>
.back {
  width: 100%;
  height: 864px;
  background-size: 100% 100%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-shadow: 0 0 3px #00f;
  box-shadow: 0 0 3px #00f;
  background-color: #031322;
  background-image: url(./src/images/bg.bigscreen.png);
}
.yiqing-zonghe {
  height: 250px;
  margin-left: 15px;
  margin-right: 15px;
}
// .yiqing-zonghe/deep/.dv-border-svg-container{
// }
.yiqing-city-list {
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
}
.datetime {
  height: 10px;
  // border: 1px solid red;
  text-align: center;
}
.yiqing-map {
  // border: solid 1px white;
  width: 100%;
  height: 400px;
}
.yiqing-other-list {
  width: 100%;
  height: 100%;
}
.yiqing-chant {
  height: 500px;
  margin-left: 15px;
  margin-right: 15px;
}
.yiqing-chant2 {
  height: 200px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
}
.yiqing-airticle {
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
}

.in-up {
  margin-bottom: 15px;
}
.in-down {
  margin-bottom: 15px;
}

.row {
  width: 100%;
  height: 100%;
  padding-top: 65px;
  margin: 0px;
  z-index: 100;
  // border: solid 2px red;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-content: center;
  align-content: center;
  justify-content: space-between;
}
.col {
  // border: solid 1px red;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-content: center;
  align-content: center;
}
.left {
  width: 25%;
}
.center {
  width: 50%;
}
.right {
  width: 25%;
}
.veline{
  border:1px solid red;
  width:300px;
  height:300px;
}
</style>