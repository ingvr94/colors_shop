<script>
  import {mapActions} from 'vuex'

  export default {
    data(){
      return {
        isMenu:false
      }
    },
    props:{
    cart_data:{
        type:Array,
        default(){
            return []
        }
    }
 },
    methods:{
      ...mapActions(['OPEN_MODAL']),
      toggleMenu(){
        this.isMenu=!this.isMenu
      }
    },
    computed:{
      cartTotalQuantity(){
        if (this.cart_data.length>0){
            let result=[]

        for (let item of this.cart_data) {
            result.push(item.quantity)
        }

        result=result.reduce((sum,el)=>{
            return sum+el
        })

        return result
        }
    }
    }
  }


</script>

<template>
  <nav>
      <div @click="toggleMenu" class="nav__burger">
        <div class="nav__burger__bar"></div>
        <div class="nav__burger__bar"></div>
        <div  class="nav__burger__bar"></div>
      </div>
      <div v-if="isMenu" class="nav__sidemenu">
        <div @click="toggleMenu" class="x-mark">
          <div class="x-mark__bar bar1"></div>
          <div class="x-mark__bar bar2"></div>
        </div>
        <ul class="nav__sidemenu__list">
        <li class="nav__sidemenu__item">Продукты</li>
        <li class="nav__sidemenu__item">Цвета</li>
        <li class="nav__sidemenu__item">Вдохновение</li>
        <li class="nav__sidemenu__item">Советы</li>
        <li class="nav__sidemenu__item">Найти магазин</li>
      </ul>
      </div>
      <span class="nav__logo">Colors</span>
      <ul class="nav__menu">
        <li class="nav__item">Продукты</li>
        <li class="nav__item">Цвета</li>
        <li class="nav__item">Вдохновение</li>
        <li class="nav__item">Советы</li>
        <li class="nav__item">Найти магазин</li>
      </ul>
    
        <div class="nav__contacts">
        <span class="nav__contacts__number">+7 (495) 221-77-69</span>
        <span class="nav__contacts__callback">Заказать звонок</span>
      </div>
      <div class="nav__icons">
          <img src="./icons/search-2.png" alt="search" class="nav__icon__search">
          <img src="./icons/profile.png" alt="search" class="nav__icon__profile">
          <img src="./icons/heart.png" alt="search" class="nav__icon__like">
        <span @click="OPEN_MODAL" class="nav__icon__cart">{{ cartTotalQuantity ? cartTotalQuantity : 0}}</span>
      </div>

  </nav>
</template>

<style >

@media screen and (min-width:1280px) {
  nav {
    padding: 40px 64px;
  }

  .nav__logo {
    font-size: 30px;
  }

  .nav__burger{
    display: none;
  }
  .nav__menu {
    display: flex;
  }
  .nav__contacts {
    display: flex;
  }
}

@media screen and (max-width:1280px) {
  nav {
    padding: 40px 64px;
  }

  .nav__logo {
    font-size: 30px;
  }

  .nav__menu {
    display: none;
  }
  .nav__contacts {
    display: flex;
  }
}

@media screen and (max-width:768px) {
  nav {
    padding: 22px 24px;
  }

  .nav__logo {
    font-size: 22px;
  }

  .nav__contacts, 
  .nav__icon__profile, 
  .nav__icon__like,
  .nav__icon__search {
    display: none;
  }
  
}
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__sidemenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 100;
  }
  .x-mark {
    width: 24px;
    height: 24px;
    position: absolute;
    top:20px;
    right:20px;
  }

  .x-mark__bar {
    width: 24px;
    height: 2px;
    margin: 4px 0;
    background-color: rgb(31, 32, 32);
  }

  .bar1 {
    transform: rotate(45deg);
  }

  .bar2 {
    transform: rotate(-45deg) translateY(-4px) translateX(4px);
  }
  

  .nav__sidemenu__list {
    list-style-type: none;
  }

  .nav__sidemenu__item {
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 20px;
  }

  .nav__logo {
    text-transform: uppercase;
    font-weight: 500;
    position: relative;
    z-index: 0;
  }

  .nav__logo::after {
    content:'.';
    font-size: 46px;
    top:-32px;
    position: absolute;
    z-index: 0;
  }

  .nav__menu {
    list-style-type: none;
    text-transform: uppercase;
    letter-spacing: .06em;
    line-height: 14px;
    font-weight: 400;
    gap: 24px;
  }

  .nav__item {
    cursor: pointer;
  }

  .nav__contacts {
    flex-direction: column;
  }

   .nav__contacts__number {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    line-height: -.02em;
   } 

   .nav__contacts__callback {
    opacity: 30%;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
   }

   .nav__icons {
    display: flex;
    align-items: center;
    gap: 24px;
   }

   .nav__icons__desktop {
    gap: 24px;
   }

   .nav__icon__search {
    width: 20px;
    height: 20px;
    cursor: pointer;
   }

   .nav__icon__profile, .nav__icon__like {
    width: 22px;
    height: 22px;
    cursor: pointer;
   }

   .nav__icon__cart {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(123, 184, 153, 1);
    cursor: pointer;
   }


   .nav__burger__bar {
    width: 24px;
    height: 2px;
    margin: 4px 0;
    background-color: rgb(31, 32, 32);
   }

</style>
