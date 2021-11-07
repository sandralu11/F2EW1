<template>
    <div class="banner">
       
        <Swiper class="mySwiper">
                <SwiperSlide><img src="https://source.unsplash.com/random/1440x600/?travel" alt="輪播"></SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/1440x600/?city" alt="輪播"></SwiperSlide>
                <SwiperSlide><img src="https://source.unsplash.com/random/1440x600/?walk" alt="輪播"></SwiperSlide>
        </Swiper>
        <div class="selectbox">
            <p>Welcome to Travel Taiwan</p>
            <select>
                <option>類別</option>
                <option>Dog</option>
                <option>Cat</option>
            </select>
            <select>
                <option>所有縣市</option>
                <option>Dog</option>
                <option>Cat</option>
            </select>
            <span class="icon">
                <i class='bx bx-search-alt'></i>
            </span>
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
    }
}
</script>

<style lang="scss" scoped>
.banner{
    position: relative;
    .selectbox{
        position:absolute ;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);    
        z-index: 2;
    }
    .selectbox{
        p{
            font-style: italic;
            font-weight: bold;
            font-size: 48px;
            color: #FFFFFF;
            text-shadow: 10px 8px 12px rgba(0, 0, 0, 0.37);
        }
        .icon{
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
            height: 48px;
            margin: 10px;
            border-radius: 10px;
            text-align: center;
            border:#FFF;
            &:nth-child(even){
                width: 190px;
            }
            &:nth-child(odd){
                width: 270px;
            }
        }
    }
    .mySwiper{
    img{
        width: 100%;
    }
    }
}

</style>