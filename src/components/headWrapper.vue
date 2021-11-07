<template>
    <header>
        <nav>
            <ul class="logo">
                <img src="@/assets/3.png" alt="Travel Taiwan">
                <p>Travel Taiwan</p>
            </ul>
            <ul>
                <li><a href="#">首頁</a></li>
                <li><a href="#">景點導覽</a></li>
                <li><a href="#">觀光活動</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
    padding: 20px 0;
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul,li{
        display: inline-block;
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
    li{
        padding-right: 60px;
        a{
            font-size: 20px; 
            color: #525151;
            &:hover{
                font-weight: bold;
                color: #08A6BB;
                
            }
        }
    }

}
</style>