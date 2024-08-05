<script >
import { mapActions } from 'vuex';
export default {
    props:{
        filterChecked:{
            type:Array,
            default(){
                return []
            }
        }   

        },   
    methods:{
        ...mapActions(['CLOSE_FILTERS']),
        filterMobile(e){
        if (e.target.checked) {
            this.filterChecked.push(e.target.value)
        }
        else {
            this.filterChecked.splice(this.filterChecked.indexOf(e.target.value),1)
        }
    },
    }
}

</script>

<template>
    <div @click="CLOSE_FILTERS" class="switchlist__modal">
        <div @click.stop class="switchlist__area">
            <div class="switchlist__swipemark"></div>
            <ul class="products__switchlist">
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="new" @click="filterMobile">
                    <span class="slider round"></span>     
                </label>
                Новинки
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="instock" @click="filterMobile">
                    <span class="slider round"></span>     
                </label>
                Есть в наличии
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="contract" @click="filterMobile">
                    <span class="slider round"></span>     
                </label>
                Контрактные
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="exclusive" @change="filterMobile">
                    <span class="slider round"></span>     
                </label>
                Экслюзивные
            </li>
            <li class="products__categories">
                <label class="switch">
                    <input type="checkbox" value="sale" @click=" filterMobile">
                    <span class="slider round"></span>     
                </label>
                Распродажа
            </li>
        </ul>
        </div>

     
    </div>
</template>

<style scoped>
.products__switchlist{
    list-style-type: none;
    margin-top: 38px;
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
.switchlist__modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
}
.switchlist__area {
    position: absolute;
    bottom:0;
    left:0;
    background: white;
    border-radius: 24px 24px 0px 0px;
    width: 100%;
    height: 318px;
    padding: 12px 24px 0 24px;
}
.switchlist__swipemark {
    width: 28px;
    height: 4px;
    background-color: rgba(31, 32, 32, 0.6);
    border-radius: 40px;
    margin: 0 auto;
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

/* Rounded sliders */
.slider.round {
  border-radius: 40px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>
