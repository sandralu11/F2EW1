<template>
  <div class="home">
    <SelectWrapper/>
    <div class="container">
        <h2>熱門景點</h2>
        <p>台灣的各個美景，都美不勝收。</p>
        <p> 等你一同來發現這座寶島的奧妙！</p>
        <CardsWrapper v-for="(item, i) in 8" :key="i"/>
    </div>
    
  </div>
</template>

<script>
import SelectWrapper from '../components/selectWrapper.vue'
import CardsWrapper from '../components/cardsWrapper.vue'

export default {
  name: 'Home',
  components: {
    SelectWrapper,
    CardsWrapper
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/media.scss';
.container{
  margin: 100px 95px;
  @include mobile{
    margin: 30px 20px;
  }
  h2{ 
    font-weight: bold;
    font-size: 30px;
    color: #08A6BB;
  }
  p{
    font-size: 16px;
    color: #AEAEAE;
  }
}

</style>