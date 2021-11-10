<template>
    <header>
        <nav>
            <ul class="logo">
                <img src="@/assets/3.png" alt="Travel Taiwan">
                <p>Travel Taiwan</p>
            </ul>
            <ul class="list"> 
                <li><router-link to="/">首頁</router-link></li>
                <li><router-link to="/ScenicSpot">景點導覽</router-link></li>
                <li><router-link to="/Activity">觀光活動</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/media.scss';
header{
    padding: 20px 0;
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include mobile{
            display: block;
        }
    }
    ul,li{
        display: inline-block;
        @include mobile{
            padding: 10px;
        }
    }
    
    .logo{
        padding-left: 60px;
    }
    img{
        width: 40px;
        height: 40px;
        vertical-align:middle;
    }
    p{
        padding-left: 20px;
        display: inline;
        vertical-align:middle;
        color:#08A6BB;
        font-size: 30px;
        font-style: italic;
        font-weight: 900;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .list{
        @include mobile{
            display: flex;
            justify-content: space-around;

        }

    }
    li{
        padding-right: 60px;
        @include mobile{
            padding-right: 0px;
        }
        a{
            font-size: 20px; 
            color: #525151;
            &:hover{
                font-weight: bold;
                color: #08A6BB;
                
            }
            @include mobile{
                font-size: 16px;
            }
        }
    }

}
</style>