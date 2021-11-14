<template>
<div class="card-container">
    <div class="card">
        <img :src="img" alt="trawelimg">
        <div class="card-info">
            <ul>
                <li class="name">{{name}}</li>
                <li class="time-box"> 
                    <i class='bx bx-time-five' ></i>
                    <span class="time">{{time}}</span>
                </li>
            </ul>
            <ul>
                <li class="locationn-box"> 
                    <i class='bx bxs-map'></i>
                    <span class="location">{{ address || location || "詳見官網"}}</span>
                </li>
            </ul>
            <AlertWrapper
                :name="name"
                :address="address"
                :location="location"
                :img="img"
                :time="time"
                :description="description"
                :descriptionDetail="descriptionDetail"
                :ticketInfo="ticketInfo"
                :phone="phone"
                :class1="class1"
            />
        </div>
    </div>
</div>

</template>

<script>
import AlertWrapper from "./alertWapper.vue";

export default {
    components: {
        AlertWrapper,
    },
    props: {
        name:String,
        time:{
            type:String,
            default:"詳見官網",
        },
        address:String,
        location:String,
        img:{
            type:String,
            default:"https://i.imgur.com/TtvQ2iH.jpg",
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

}
</script>

<style lang="scss" scoped>
@import '../assets/media.scss';

.card-container{
    box-sizing: border-box;
    margin-top: 50px;
    padding: 15px;
    display: inline-block;
    width: 25%;
    @include desktops{
        width: 100%;
    }
    .card{
        width: 100%;
        box-shadow: 7px 8px 22px rgba(111, 119, 137, 0.25);
        overflow: hidden;
        border-radius: 8px;
        img{
            width: 100%;
            height: 184px;
            object-fit: cover;
        }
        .card-info{
            padding: 0 15px 20px;
            ul{
                margin: 20px 0 ;
                &:first-child{
                    height: 100px;
                }
            }
        }
        i{
            vertical-align: middle;
            padding-right:3px;
        }
        .name{
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            color: #525151;
            padding-right:13px ;
            vertical-align: middle;
    
        }
        .time-box{
            display: inline-block;
            .time{
                font-weight: 300;
                font-size: 12px;
                color: #6F7789;
            }
        }
        .bxs-map{
            color: #08A6BB;
            font-size: 16px;
            vertical-align: middle;
        }
        .locationn-box{
            height: 40px;
        }
        .location{
            font-weight: 500;
            font-size: 16px;
            color: #525151;
            vertical-align: middle;
            
        }
    }
}



</style>