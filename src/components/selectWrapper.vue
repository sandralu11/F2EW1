<template>
    <div class="banner">
        <Swiper ref="mySwiper" >
                <SwiperSlide><img src="https://source.unsplash.com/random/1440x600/?travel" alt="輪播"></SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/1440x600/?city" alt="輪播"></SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/1440x600/?walk" alt="輪播"></SwiperSlide>
        </Swiper>
        <div class="content">
            <p>Welcome to Travel Taiwan</p>
            <div class="selectbox">
                <select v-model="nowIndexClass" @change="nowClass = '所有類別'">
                    <option v-for="item in indexClass" :key="item.value"  :value="item.value">{{item.name}}</option>
                </select>
                <select v-model="nowClass">
                    <option v-for="item in selectClass" :key="item"  :value="item">{{item}}</option>
                </select>
                <select v-model="nowCity">
                    <option value="all">所有縣市</option>
                    <option v-for="item in city" :key="item.value" :value="item.value">{{item.name}}</option>
                </select>
                <span class="icon" @click="search">
                    <i class='bx bx-search-alt'></i>
                </span>
            </div>
        </div>   
    </div>

</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    components: {
    Swiper,
    SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data(){
        return{
            option:{
                autoplay:{
                    delay: 5000
                }
            },
            nowIndexClass:'ScenicSpot',
            indexClass:[
            {
                value:'ScenicSpot',
                name: '景點導覽'
            },
            {
                value:'Activity',
                name: '觀光活動'
            }
            ],
            nowClass:"所有類別",
            ScenicSportClass:[
                "所有類別",
                "文化類",
                "自然風景類",
                "生態類",
                "國家風景區類",
                "遊憩類",
                "古蹟類",
                "觀光工廠類",
                "廟宇類",
                "休閒農業類",
                "體育健身類",
            ],
            ActivityClass:[
                "所有類別",
                "年度活動",
                "藝文活動",
                "節慶活動",
                "其他",
            ],
            nowCity:'all',
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
                ],

        }
    },
    methods:{
        search:function(){

            let obj={}
            if(this.nowClass!=='所有類別'){
                obj.filter = this.nowClass
            }


            this.$router.push({
                path:'/'+this.nowIndexClass+'/'+this.nowCity,
                query:obj
            })
        }
    },
    computed:{
        selectClass () {
            if(this.nowIndexClass==="ScenicSpot"){
                return this.ScenicSportClass
            }else{
                return this.ActivityClass
            }
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/media.scss';
.banner{
    position: relative;
    .content{
        position:absolute ;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);    
        z-index: 2;
        .selectbox{
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
        }
        p{
            text-align: center;
            font-style: italic;
            font-weight: bold;
            font-size: 48px;
            color: #FFFFFF;
            text-shadow: 10px 8px 12px rgba(0, 0, 0, 0.37);
        }
        .icon{
            cursor: pointer;
            background-color: #08A6BB;
            border-radius: 8px;
            padding: 10px;
            margin: 10px;
            i{
                color:#FFF;
                font-size: 30px;
                vertical-align: middle;
            }
        }
        select{
            margin: 5px;
            border-radius: 10px;
            text-align: center;
            border:#FFF;
            flex-grow:1;
        }
    }
    .mySwiper{
        img{
            width: 100%;
            @include desktops{
                height: 450px;
                object-fit: cover;
            }
            
        }
    }
}

</style>