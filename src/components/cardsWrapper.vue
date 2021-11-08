<template>
<div class="card-container">
    <div class="card">
        <img src="https://source.unsplash.com/random/396x184/?travel" alt="trawel">
        <div class="card-info">
            <ul>
                <li class="name">正濱漁港懷舊碼頭</li>
                <li class="time-box"> 
                    <i class='bx bx-time-five' ></i>
                    <span class="time">全天候開放</span>
                </li>
            </ul>
            <ul>
                <li class="locationn-box"> 
                    <i class='bx bxs-map'></i>
                    <span class="location">臺東縣951綠島鄉</span>
                </li>
            </ul>
            <button>了解更多</button>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card-container{
    box-sizing: border-box;
    margin-top: 50px;
    padding: 15px;
    display: inline-block;
    width: 25%;
    .card{
        width: 100%;
        height: 346px;
        box-shadow: 7px 8px 22px rgba(111, 119, 137, 0.25);
        overflow: hidden;
        border-radius: 8px;
        img{
            width: 100%;
            height: 184px;
            object-fit: cover;
        }
        .card-info{
            padding: 0;
            ul{
                margin: 20px 0 ;
            }
        }
        i{
            vertical-align: middle;
            padding-right: 5px;
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
        }
        .location{
            font-weight: 500;
            font-size: 16px;
            color: #525151;
        }
    button{

        width: 179px;
        height: 32px;
        left: calc(50% - 179px/2 + 0.5px);
        color: #08A6BB;
        background: #FFFFFF;
        border: 4px solid #08A6BB;
        box-sizing: border-box;
        border-radius: 8px;
    }
    }
}



</style>