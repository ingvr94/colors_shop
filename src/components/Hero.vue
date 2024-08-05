<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
    <section class="hero">
        <ul class="hero__menu">
            <li class="hero__item">Главная</li>
            <li class="hero__item">Продукты</li>
            <li class="hero__item">Краски</li>
        </ul>
        <div class="hero__mobile-title">Краски</div>
    <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"

  >
    <swiper-slide>
        <span class="hero__title">Краски</span>
        <span class="hero__description">Идеально подходят для стен и других поверхностей.<br />Найди свой идеальный цвет!</span>
    </swiper-slide>
    <swiper-slide>
        <span class="hero__title">Краски</span>
        <span class="hero__description">Идеально подходят для стен и других поверхностей.<br />Найди свой идеальный цвет!</span>
    </swiper-slide>
    <swiper-slide>
        <span class="hero__title">Краски</span>
        <span class="hero__description">Идеально подходят для стен и других поверхностей.<br />Найди свой идеальный цвет!</span>
    </swiper-slide>
    <swiper-slide>
        <span class="hero__title">Краски</span>
        <span class="hero__description">Идеально подходят для стен и других поверхностей.<br />Найди свой идеальный цвет!</span>
    </swiper-slide>
    <swiper-slide>
        <span class="hero__title">Краски</span>
        <span class="hero__description">Идеально подходят для стен и других поверхностей.<br />Найди свой идеальный цвет!</span>
    </swiper-slide>
    <swiper-slide>
        <span class="hero__title">Краски</span>
        <span class="hero__description">Идеально подходят для стен и других поверхностей.<br />Найди свой идеальный цвет!</span>
    </swiper-slide>
  </swiper>
    </section>
</template>

<style scoped>

@media screen and (min-width:1280px) {
    .hero {
        background: url(../assets/hero_bkg.png) no-repeat;
        height: 560px;
        padding: 32px 64px;
    }
    .hero__mobile-title {
      display: none;
    }
}

@media screen and (max-width:1280px) {
    .hero {
        background: url(../assets/hero_bkg.png) no-repeat;
        height: 560px;
        padding: 32px 64px;
    }
    .hero__mobile-title {
      display: none;
    }

}

@media screen and (max-width:768px) {
    .hero {
        background:#fff;
        height: auto;
        padding: 16px 24px;
    }
    .swiper {
        display: none;
    }
    .hero__menu {
      margin-bottom: 48px;
    }
    .hero__mobile-title {
      display: inline;
    }
}

    .hero { 
        width: 100%;
    }
    .hero__menu {
        display: flex;
        text-transform: uppercase;
        font-size: 10px;
        line-height: 10px;
        letter-spacing: .06em;
        opacity: .3;
        list-style-type: none;
    }

    .hero__item:nth-child(2):before, 
    .hero__item:nth-child(2):after {
        content: '\00B7';
        height: 3px;
        width: 3px;
        padding: 0 8px;
    }

    .hero__title {
        font-size: 72px;
        line-height: 63.36px;
        letter-spacing: -.02em;
    }

    .hero__mobile-title {
      font-weight: 400;
      font-size: 36px;
      line-height: 31.68px;
      letter-spacing: -.04em;
      color: black;
    }

    .hero__description{
        font-weight: 500;
        font-size: 16px;
        line-height: 20.8px;
        letter-spacing: .02em;
        text-align: center;
        margin-top: 24px;
    }

    .swiper {
  width: 100%;
  height: 100%;
  z-index: 0;
}

.swiper-slide {
  text-align: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}


</style>
