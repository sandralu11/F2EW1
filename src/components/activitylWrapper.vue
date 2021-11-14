<template>   
    <div class="view">
        <ul class="list">
            <li class="item" v-for="item in list" :key="item">
                <router-link :to="{path:'/Activity/all',query:{
                    filter:item
                }}">
                <img src="https://source.unsplash.com/random/" alt="img">
                <p>{{item}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return{
            list: ['年度活動','藝文活動','節慶活動','其他活動']
        }
    }
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
    color: #aaa;
    &:hover{
        color: #08A6BB
    }
}
</style>