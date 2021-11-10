<template>   
    <div class="view">
        <ul class="list">
        <li class="item">
            <img src="https://source.unsplash.com/random/" alt="img">
            <p>年度活動</p>
        </li>
        <li class="item">
            <img src="https://source.unsplash.com/random/" alt="img">
            <p>藝文活動</p>
        </li>
        <li class="item">
            
            <img src="https://source.unsplash.com/random/" alt="img">
            <p>節慶活動</p>
        </li>
        <li class="item">
            <img src="https://source.unsplash.com/random/" alt="img">
            <p>其他活動</p>
        </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/media.scss";
.view{
    margin: 50px 0;
    width: 100%;
    overflow-x: auto;
}
.list{
    width: 100%;
    font-size: 0;
    @include mobile{
        width: 1000px;
    }
}
.item{
    width: calc(25% - 50px);
    margin: 25px;
    display: inline-block;
}
img{
    width: 100%;
    vertical-align: middle;
    border-radius: 10px;
}
p{
    font-size: 20px;
    text-align: center;
    padding: 20px;
}
</style>