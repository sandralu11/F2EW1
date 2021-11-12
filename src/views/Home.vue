<template>
  <div class="home">
    <SelectWrapper/>
    <div class="container">
        <h2>熱門景點</h2>
        <p>台灣的各個美景，都美不勝收。</p>
        <p>等你一同來發現這座寶島的奧妙！</p>
        <CardsWrapper v-for="(item, i) in list" :key="i"
          :name="item.Name"
          :img="item.Picture.PictureUrl1"
          :time="item.OpenTime"
          :address="item.Address"
          :description="item.Description"
          :descriptionDetail ="item.DescriptionDetail"
          :phone="item.Phone"
          :ticketInfo="item.TicketInfo"
          :class1="item.Class1"
        />
        <h2>活動類別</h2>
        <p>各種不同的活動內容</p>
        <p>邀請您一銅來共襄盛舉！</p>
        <ActivityWrapper/>
    </div>
    <div class="slogn">
      <img src="../assets/unsplash_dQejX2ucPBs.png" alt="">
      <div class="text">
            <p>“To travel is to live” </p>
            <p>– Hans Christian Anderson-  </p>
      </div>  
    </div>
  </div>
</template>

<script>
import SelectWrapper from '../components/selectWrapper.vue'
import CardsWrapper from '../components/cardsWrapper.vue'
import ActivityWrapper from '../components/activitylWrapper.vue'
import getAPI from '../lib/Authorization.js'


export default {
  name: 'Home',
  components: {
    SelectWrapper,
    CardsWrapper,
    ActivityWrapper
  },
  created (){
    getAPI().then(res => {
      this.list=res
    })
  },
  data (){
    return{
      list:[]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/media.scss';
.container{
  margin:0 90px;
  @include mobile{
    margin: 0 20px;
  }
  h2{ 
    font-weight: bold;
    font-size: 30px;
    padding-top:100px;
    color: #08A6BB;
  }
  p{
    font-size: 16px;
    color: #AEAEAE;
    
  }
}
.slogn{
  margin-bottom: -50px;
  position: relative;
  img{
    width: 100%;
    display: block;
    @include mobile{
      height: 350px;
    }
  }
  .text{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    p{
    font-size: 32px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  }

}

</style>