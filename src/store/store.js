import axios from "axios";
import { createStore } from "vuex";

const state={
    products:[],
    cart:[],
    isModal:false,
    isFilters:false,
    selected:''
}

const mutations={
    SET_PRODUCTS_TO_STATE:(state,products)=>{
        state.products=products
    },
    OPEN_MODAL:(state)=>{
        state.isModal=true;
        document.querySelector('body').style.overflow='hidden'
    },
    CLOSE_MODAL:(state)=>{
        state.isModal=false;
        document.querySelector('body').style.overflow='auto'
    },
    OPEN_FILTERS:(state)=>{
        state.isFilters=true;
    },
    CLOSE_FILTERS:(state)=>{
        state.isFilters=false;
    },
    SET_TO_CART:(state,product)=>{
        if (state.cart.length) {
            let isProductExists=false
            state.cart.map((item)=>{
                if (item.id===product.id) {
                    isProductExists=true;
                    product.quantity++
                }
            })
            if (!isProductExists) {
                state.cart.push(product)
                product.quantity++
                
            }
        }
        else {
            product.quantity++
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART:(state,index)=>{
        state.cart.splice(index,1)
    },
    RESET_CART:(state)=>{
        state.cart=[]
    },
    SET_SELECTED:(state,select)=>{
        state.selected=select
    }
}

const actions={
    GET_PRODUCTS_FROM_API({commit}){
        return axios('https://66a647dc23b29e17a1a23941.mockapi.io/api/v1/products',{
            method:'GET'
        })
        .then((products)=>{
            commit('SET_PRODUCTS_TO_STATE',products)
            return products.data
        })
        .catch((err)=>{
            console.log(err)
            return err
        })
    },
    OPEN_MODAL({commit}){
        commit('OPEN_MODAL')
    },
    CLOSE_MODAL({commit}){
        commit('CLOSE_MODAL')
    },
    OPEN_FILTERS({commit}){
        commit('OPEN_FILTERS')
    },
    CLOSE_FILTERS({commit}){
        commit('CLOSE_FILTERS')
    },
    ADD_TO_CART({commit},product){
        commit('SET_TO_CART',product)
    },
    DELETE_FROM_CART({commit},index){
        commit('REMOVE_FROM_CART',index)
    },
    RESET_CART({commit}){
        commit('RESET_CART')
    },
    SET_SELECTED({commit},select){
        commit('SET_SELECTED',select)
    }

}

const getters={
    PRODUCTS(state) {
        return state.products
    },
    CART(state) {
        return state.cart
    },
    SELECTED(state) {
        return state.selected
    },
    SORTED_PRODUCTS:(state)=>{
        if (state.products.data) {
            if (state.selected==='Сначала дорогие'){
                return state.products.data.sort((a,b)=>b.price-a.price)
            }
            else if (state.selected==='Сначала недорогие')
                return state.products.data.sort((a,b)=>a.price-b.price)
            else if (state.selected==='Сначала популярные')
                return state.products.data.sort((a,b)=>b.popularity-a.popularity)
            else if (state.selected==='Сначала новые')
                return state.products.data.sort((a,b)=>b.manufature_date-a.manufature_date)
        }
        
    }
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})

