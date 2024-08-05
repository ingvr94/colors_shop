<script>

export default {
    props:{
        cart_data_item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    }

}

</script>

<template>
    <img class="cart__img" :src=cart_data_item.image>
    <div class="cart__attributes">
        <span class="cart__name">{{ cart_data_item.name }}</span>
        <span class="cart__price">{{ cart_data_item.price}} &#8381;</span>
    </div>
    <div class="cart__counter">
        <button @click="cart_data_item.quantity>1 ? (cart_data_item.quantity--) : deleteFromCart()" class="btn_secondary">-</button>
        <span class="cart__quantity">{{ cart_data_item.quantity }}</span>
        <button @click="cart_data_item.quantity++" class="btn_secondary">+</button>
    </div>
    <div @click="deleteFromCart" style="opacity: .2;margin-bottom: 7px;cursor: pointer;" class="modal__xmark">
        <div class="x-mark__bar bar1"></div>
        <div class="x-mark__bar bar2"></div>
    </div>
</template>

<style >

@media screen and (min-width:768px) {
    .cart__attributes {
    gap: 16px;
    width: 165px;
    margin-left: -50px;
 }
 .cart__name ,.cart__price {
    font-size: 16px;
 }
 .cart__counter {
    gap: 17px;
 }
 

}

@media screen and (max-width:767px) {
    .cart__attributes {
    gap: 10px;
 }
    .cart__name ,.cart__price {
    font-size: 12px;
 }
 .cart__counter {
    gap: 10px;
 }

 }

 .cart__img {
    width: 96px;
    height: 96px;
 }

 .cart__attributes {
    display: flex;
    flex-direction: column;
 }

 .cart__name {
    font-weight: 300;
    line-height: 17.92px;
    letter-spacing: .02em;
 }

 .cart__price {
    font-weight: 600;
    line-height: 16px;
 }

 .cart__counter {
    display: flex;
    align-items: center;
   
 }

 .btn_secondary {
    width: 40px;
    height: 24px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(242, 242, 242);
    cursor: pointer;
 }


</style>
