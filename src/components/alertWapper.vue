<template>
  <div>
    <button @click="show = true">了解更多</button>

    <van-popup v-model="show" get-container="#app" class="alter-info">
        <ul>
            <li class="name">{{name}}</li>
            <span class="close" @click="show = false">X</span>
        </ul>
        <ul>
            <li> 
                <i class='bx bxs-map'></i>
                <span class="location">{{address}}</span>
            </li>
        </ul>
        <ul>
            <li> 
                <i class='bx bx-time-five'></i>
                <span>{{time}}</span>
            </li>
        </ul>
        <ul>
          <li class="description" >{{description}}</li>
          <!-- <li class="descriptionDetail" >{{descriptionDetail}}</li> -->
        </ul> 
        <ul class="img">
          <img :src="img" alt="trawelimg">
        </ul>
        <ul class="info">
            <li>
              <i class='bx bxs-coupon'></i>
              {{ticketInfo}}
            </li>
            <li>
              <i class='bx bx-phone'></i>
              <a :href="'tel:'+phone" class='phone'>{{phone}}</a>
            </li>
            <li>
              <i class='bx bx-list-ul'></i>
              {{class1}}
            </li>
        </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  },
  props: {
    name:String,
    time:String,
    address:String,
    img:{
        type:String,
        default:"img/default.jpg",
    },
    description:String, 
    descriptionDetail:String,
    ticketInfo:{
      type:String,
      default:"無費用資訊"
    },
    phone:{
      type:String,
      default:"無聯絡電話"
    },
    class1:{
      type:String,
      default:"其他類別"
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/media.scss';

button{
  display: block;
  width: 60%;
  margin: auto;
  color: #08A6BB;
  background: #FFFFFF;
  border: 4px solid #08A6BB;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover{
      color: #FFF;
      background: #08A6BB;
  }
}
.alter-info{
    padding: 40px;
    width: 50%;
    @include mobile{
    width: 80%;
    }
    ul{
        margin: 20px 0 ;
        &:first-child{
          display: flex;
          justify-content: space-between;
        }
    }
    .close{ 
        color: #fff ;
        background-color: #CBCBCB;
        padding: 5px 8px;
        border-radius: 3px;
        display: inline-block;
        cursor: pointer;
    }
    .name{
      font-weight: 900;
      font-size: 20px;
    }
    img{
      height: 365px;
      width: 100%;
      object-fit: cover;
    }
    .description,.descriptionDetail{
      line-height: 24px;
    }
    .info{
      color: #08A6BB;
      font-size: 16px;
      vertical-align: middle;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
    }
    .phone{
      color: #08A6BB;
    }
}

</style>