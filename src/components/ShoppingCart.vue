<script>
import {mapActions} from 'vuex'
import CartItem from './CartItem.vue';

export default {
    components:{
        CartItem
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
   ...mapActions(['CLOSE_MODAL','DELETE_FROM_CART','RESET_CART']),
    deleteFromCart(index){
       this.DELETE_FROM_CART(index)
    },
    resetCart(){
        this.RESET_CART()
    }

 },
 computed:{
    cartTotalCost(){
        if (this.cart_data.length>0){
            let result=[]

        for (let item of this.cart_data) {
            result.push(item.price*item.quantity)
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
    <div class="modal">
        <div class="modal__cart">
            <div class="modal__header">
                <div class="modal__name">Корзина</div>
                <button @click="CLOSE_MODAL" class="modal__closebtn">
                    <div class="modal__xmark">
                        <div class="x-mark__bar bar1"></div>
                        <div class="x-mark__bar bar2"></div>
                    </div>
                </button>
            </div>
            <div class="modal__table">   
                    <span class="cart__empty" v-if="!cart_data.length">Корзина пуста.</span>
                    <div class="table__header" v-else>
                        <span class="table__quantity">{{cart_data.length }} товара(ов)</span>
                        <span @click="resetCart" class="table__clear">Очистить список</span>
                    </div>
                <div class="table__body">
                    <ul class="table__list">
                        <li class="table__row" v-for="(item,index) in cart_data" :key="item.id">
                            <CartItem :cart_data_item="item" @deleteFromCart="deleteFromCart(index)"  />
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="cart_data.length" class="table__footer">
                <div class="cart__total">
                    <span class="cart__summary">Итого</span>
                    <span class="cart__totalprice">{{ cartTotalCost ? cartTotalCost : 0 }} &#8381;</span>
                </div>
                <button @click="alert('Заказ оформлен!')" class="cart__order">Оформить заказ</button>
            </div>
        </div>
    </div>
</template>

<style >

@media screen and (min-width:1280px) {
    .modal__cart {
        width: 600px;
        padding: 40px;
    }
    .cart__order {
        padding: 20px 58px;
    }

}

@media screen and (max-width:1280px) {
    .modal__cart {
        width: 100%;
        padding: 40px;
    }
    .cart__order {
        padding: 20px 58px;
    }
}

@media screen and (max-width:414px) {
    .modal__cart {
        width: 100%;
        padding: 10px;
    }
    .cart__order {
        padding: 10px 20px;
    }
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
 }

 .modal__cart {
    height: 100vh;
    background: #fff;
    position: relative;
 }

 .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
 }

 .modal__name {
    font-weight: 500;
    font-size: 30px;
    line-height: 26.4px;
    letter-spacing: -.04;
 }

 .modal__closebtn {
    border-radius: 50%;
    border:1px solid rgba(0, 0, 0, 0.1);
    width: 48px;
    height: 48px;
    position: relative;
    background: #fff;
    cursor: pointer;
 }

 .modal__xmark {
 width: 24px;
 height: 24px;
margin-left: 11px;
margin-top: 20px;
 }

 .modal__table {
    margin-top: 80px;

 }

 .cart__empty {
    text-transform: uppercase;
 }

 .cart__empty, .table__quantity {
    font-weight: 400;
    font-size: 14px;
    line-height: 15.68px;
 }

.table__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
 }

 .table__clear {
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    opacity: .4;
    cursor:pointer
 }

 .table__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 26px 0;
 }

 .table__footer {
    position: absolute;
    bottom:40px;
    left: 40px;
    right: 40px;
    display: flex;
    justify-content: space-between;
 }

 .cart__total {
    display: flex;
    flex-direction: column;
 }

 .cart__summary {
    font-size: 16px;
    line-height: 16px;
 }

 .cart__totalprice {
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -.02em;
 }

 .cart__order {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(123, 184, 153);
    border-radius: 4px;
    border:none;
    text-transform: uppercase;
    cursor: pointer;
 }

</style>
