<script >
import Card from './Card.vue';
import CustomSelect from './CustomSelect.vue';
import {mapActions, mapGetters, mapState} from 'vuex'
import SwitchListMobile from './SwitchListMobile.vue';


export default {
    components:{
        Card,
        CustomSelect,
        SwitchListMobile
    },
    data(){
        return {
            filterChecked:[],
        }
    },


methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART',
        'OPEN_FILTERS'
    ]),

    addToCart(data){
        this.ADD_TO_CART(data)
    },
    setFilter(e){
        if (e.target.checked) {
            this.filterChecked.push(e.target.value)
        }
        else {
            this.filterChecked.splice(this.filterChecked.indexOf(e.target.value),1)
        }
    },
  
    },
    computed:{
        ...mapState({
       products: state => state.products.data,
       selected:state=>state.selected,
       isFilters:state=>state.isFilters
    }),
    ...mapGetters([
        'SORTED_PRODUCTS'
    ]
    ),

    sortedProducts(){
       return this.SORTED_PRODUCTS

    },
  
    filteredProducts(){
    if (this.sortedProducts) {
        if (this.filterChecked.length !== 0 ) {
            let category=this.sortedProducts

            this.filterChecked.forEach(el=>{
                category=category.filter(product=>{   
                    return product.filters[el]
            })
        
            })
            return category
        }
        return this.sortedProducts
    }

    }
    },

    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
    }
</script>

<template>
    <section class="products">
        <ul class="products__switchlist">
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="new" @click="setFilter">
                    <span class="slider round"></span>     
                </label>
                Новинки
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="instock" @click="setFilter">
                    <span class="slider round"></span>     
                </label>
                Есть в наличии
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="contract" @click="setFilter">
                    <span class="slider round"></span>     
                </label>
                Контрактные
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="exclusive" @click="setFilter">
                    <span class="slider round"></span>     
                </label>
                Экслюзивные
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="sale" @click="setFilter">
                    <span class="slider round"></span>     
                </label>
                Распродажа
            </li>
        </ul>
        <SwitchListMobile :class="{'hide':!isFilters}"  :filterChecked="filterChecked"/>
        <div class="products__catalog">
            <div class="products__head">
                <span class="products__quantity">15 товаров</span>
                <span @click="OPEN_FILTERS" class="products__filter">Фильтры</span>
                <CustomSelect 
                class="select"
                :options="['Сначала дорогие','Сначала недорогие','Сначала популярные','Сначала новые']"
                />
            </div>
            <ul class="products__list">
                <li v-for="product in filteredProducts">
                <Card 
                :product=product
                @addToCart="addToCart" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>

@media screen and (min-width:1900px) {
    .products {
        display: flex;
        padding: 72px 64px;
    }

    .products__list {
    grid-template-columns: repeat(5,1fr);
    gap:24px;
    }

    .products__catalog {
    margin-left: 138px;
    }

    .products__filter {
        display: none;
    }
    

}

@media screen and (max-width:1900px) {
    .products {
        display: flex;
        padding: 72px 64px;
    }

    .products__list {
    grid-template-columns: repeat(3,1fr);
    gap:50px;
    }

    .products__catalog {
    margin-left: 138px;
    }

    .products__filter {
        display: none;
    }
    

}

@media screen and (max-width:1280px) {
    .products{
        padding: 30px ;
    }
    .products__list {
    grid-template-columns: repeat(3,1fr);
    gap:50px;
    }
    .products__filter {
        display: none;
    }
    .products__quantity {
        display: none;
    }
    .products__switchlist {
        display: none;
    }
    .products__filter {
        display: inline;
    }
    .products__catalog {
    margin-left: 0;
    }


}

@media screen and (max-width:768px) {
    .products {
        padding: 48px 24px;
    }
    .products__list {
    grid-template-columns: repeat(4,1fr);
    gap:30px;
    }
    .products__switchlist {
        display: none;
    }
    .products__quantity {
        display: none;
    }

    .products__filter {
        display: inline;
    }
    .products__catalog {
    margin-left: 0;
    }
}

@media screen and (max-width:414px) {
    .products {
        padding: 48px 24px;
    }
    .products__list {
    grid-template-columns: repeat(2,1fr);
    gap:15px;
    }
    .products__switchlist {
        display: none;
    }
    .products__quantity {
        display: none;
    }

    .products__filter {
        display: inline;
    }
    .products__catalog {
    margin-left: 0;
    }
}

.products{
    width: 100%;
}

.products__switchlist{
    list-style-type: none;
}
.products__categories {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: .06em;
    display: flex;
    align-items: center;
    white-space: nowrap;
}


.products__head {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 12px;
    line-height: 14.52px;
    letter-spacing: .06em;
    text-transform: uppercase;
    padding-right: 14px;
    margin-bottom: 44px;
}

.products__quantity {
    font-weight: 500;
    font-size: 12px;
    line-height: 14.52px;
    letter-spacing: .06em;
}

.products__list {
    list-style-type: none;
    display: grid;
}

.switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 22px;
    margin-right: 12px;
}

.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  top:7px;
  left: 7px;
  background-color: rgb(0, 0, 0);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: rgba(123, 184, 153, 1);
}


input:checked + .slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

.slider.round {
  border-radius: 40px;
}

.slider.round:before {
  border-radius: 50%;
}

.hide {
    visibility: hidden;
    opacity:0
}


</style>
