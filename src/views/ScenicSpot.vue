<template>
    <div class="scenicspot">
        <SelectWrapper/>
        <div class="container">
            <h2>{{searchCity}}景點</h2>
            <p>台灣的各個美景，都美不勝收。</p>
            <p>等你一同來發現這座寶島的奧妙！</p>
            <CardsWrapper v-for="(item, i) in calculate" :key="i"
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
        <ul>
          <li @click="page=1"><<</li>
          <li v-for="item in pagination" :key="item" @click="page=item" :class="{ active: item === page }">{{item}}</li>
          <li @click="page=maxPage">>></li>
        </ul>
        </div>
    </div>
</template>

<script>
import SelectWrapper from '../components/selectWrapper.vue'
import CardsWrapper from '../components/cardsWrapper.vue'
import getAPI from '../lib/Authorization.js'


export default {
    name: 'ScenicSpot',
    components: {
        SelectWrapper,
        CardsWrapper
    },
    created (){
          this.updateList()
    },
    methods:  {
      updateList (){
        let filter=this.$route.query.filter
        let notes=this.$route.name
        let city=this.$route.params.city === 'all' ? '' : this.$route.params.city
        getAPI(notes,city,false,filter).then(res => {
          this.list=res
        })
      }
    },
    data (){
    return{
      list:[],
      city:[  
          {
              value:'Taipei',
              name: '臺北市'
          },
          {
              value:'NewTaipei',
              name: '新北市'
          },
          {
              value:'Taoyuan',
              name: '桃園市'
          },
          {
              value:'Taichung',
              name: '臺中市'
          },
          {
              value:'Tainan',
              name: '臺南市'
          },
          {
              value:'Kaohsiung',
              name: '高雄市'
          },
          {
              value:'Keelung',
              name: '基隆市'
          },
          {
              value:'Hsinchu',
              name: '新竹市',
          },
          {
              value:'HsinchuCounty',
              name: '新竹縣',
          },
          {
              value:'MiaoliCounty',
              name: '苗栗縣',
          },
          {
              value:'ChanghuaCounty',
              name: '彰化縣',
          },
          {
              value:'NantouCounty',
              name: '南投縣',
          },
          {
              value:'YunlinCounty',
              name: '雲林縣',
          },
          {
              value:'ChiayiCounty',
              name: '嘉義縣',
          },
          {
              value:'Chiayi',
              name: '嘉義市',
          },
          {
              value:'PingtungCounty',
              name: '屏東縣',
          },
          {
              value:'YilanCounty',
              name: '宜蘭縣',
          },
          {
              value:'HualienCounty',
              name: '花蓮縣',
          },
          {
              value:'TaitungCounty',
              name: '臺東縣',
          },
          {
              value:'KinmenCounty',
              name: '金門縣',
          },
          {
              value:'PenghuCounty',
              name: '澎湖縣',
          },
          {
              value:'LienchiangCounty',
              name: '連江縣',
          },
          {
            value:'all',
            name:'所有'
          }
        ],
      page:1,
      }
    },
    computed:{
        searchCity () {
          const city = this.city.find(city => city.value === this.$route.params.city)
          return city.name
        },
        calculate (){
          return this.list.slice((this.page-1)*8,this.page*8)
        },
        maxPage(){
          let maxPage=Math.floor(this.list.length/8)
          console.log(maxPage);
          if(maxPage%8 !==0){
            maxPage+=1
          }
          return maxPage
        },
        pagination(){
          let page=this.page
          if(page===1){
            return [page,page+1,page+2]
          }else if(page===this.maxPage){
            return [page-2,page-1,page]
          }else{
            return [page-1,page,page+1]
          }
        }
    },
    watch:{
      '$route.params' (nV, oV) {
        this.updateList()
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

</style>