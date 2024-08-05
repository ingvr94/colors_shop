<script >
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue'
  import Products from './components/Products.vue';
  import Footer from './components/Footer.vue';
  import ShoppingCart from './components/ShoppingCart.vue';
  import {mapGetters} from 'vuex'

  export default {
    components:{
      Header,
      Hero,
      Products,
      ShoppingCart,
      Footer

    },

 computed:{
    ...mapGetters([
        'CART'
    ])
 }
  }

</script>

<template>
  <div class="container">
    <Header :cart_data="CART"/>
      <Hero /> 
      <Products />
       <ShoppingCart :cart_data="CART" v-if="this.$store.state.isModal" />
      <Footer />
  </div>

</template>

<style scoped>


</style>
