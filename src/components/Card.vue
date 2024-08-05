<script>

export default {
    data(){
        return {
            isPlusBtn:false
        }
    },
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        showPlusBtn(){
            this.isPlusBtn=true
        },
        hidePlusBtn(){
            this.isPlusBtn=false
        },
        addToCart(){
        this.$emit('addToCart',this.product)
        },
    }
}

</script>

<template>
    <div @mouseover="showPlusBtn" @mouseleave="hidePlusBtn"  class="card">
        <img class="card__img" :src='product.image'  alt="No found">
        <span class="card__name">{{ product.name }}</span>
        <div class="card__bottom">
            <span class="card__price">{{ product.price }} &#8381;</span>
            <button v-if="isPlusBtn" @click="addToCart" class="card__btn-plus">+</button>
            <button  @click="addToCart" class="card__btn-plus_grey">+</button>
        </div>
    </div>
</template>

<style scoped>

@media screen and (min-width:1367px) {
    .card {
        width: 284px;
        height: 378px;
    }

    .card__img {
    height: 278px;
    margin-bottom: 16px;
    }
    .card__btn-plus {
        display: flex;
    }
    .card__btn-plus_grey {
        display: none;
    }
    .card__bottom {
        padding-bottom: 14px;
    }

}

@media screen and (max-width:1366px) {
    .card {
        width: 284px;
        height: 378px;
    }
    .card__img {
    width: 100%;
    height: 278px;
    margin-bottom: 16px;
    }

    .card__btn-plus_grey {
        display: flex;
    }
    .card__btn-plus {
        display: none;
    }
    .card__bottom {
            padding-bottom: 34px;
        }
    }

@media screen and (max-width:768px) {
    .card {
        width: 156px;
        height: auto;
    }
    .card__img {
    width: 100%;
    height: 156px;
    margin-bottom: 24px;
    }
    .card__btn-plus_grey {
        display: flex;
    }
    .card__btn-plus {
        display: none;
    }
    .card__bottom {
        padding-bottom: 34px;
    }
  
}

    .card__img {
    width: 100%;
    }

    .card__name {
        font-weight: 300;
        font-size: 16px;
        line-height: 17.92px;
        letter-spacing: .02em;
    }

    .card__bottom {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0,0.1);
    }

    .card__price {
        margin-top: 24px;
    }

    .card__btn-plus{
        background-color: rgba(123, 184, 153, 1);
        width: 80px;
        height: 32px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 16px;
    }

    .card__btn-plus_grey {
        width: 40px;
        height: 24px;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        border: none;
        font-size: 24px;
        margin-top: 20px;
        color: black;
    }


</style>
