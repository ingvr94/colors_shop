<script>

import { mapActions, mapState} from 'vuex'
  
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods:{
    ...mapActions([
        'SET_SELECTED'
    ]),

    setSelected(data) {
        this.SET_SELECTED(data)
    },
    setOpen(){
        this.open=true;      
    }
  },
  computed:{
    ...mapState({
        selected:state=>state.selected
    }),
  },
  data() {
    return {
      open: false,
    };
  },
  mounted(){
    this.setSelected(this.options[0])
  }
};
</script>

<template>
    <div :class="{'custom-bg':open}">
    <div class="custom-select" :tabindex="tabindex">
      <div v-if="!open" class="selected"  @click="setOpen()">
        {{ selected }}
      </div>
        <div class="items" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            setSelected(option);
            open = false;
          "
        >
          {{ option }}
        </div>
      </div>
  

    </div>
    </div>
    
  </template>
  
  <style scoped>
    @media screen and (min-width:1280px) {
        .items {
            margin-top: 730px;
        }

}

@media screen and (max-width:1280px) {
    .items {
            margin-top: 700px;
        }
}

@media screen and (max-width:768px) {
    .items {
            margin-top: 240px;
        }

}


  .custom-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  .custom-select {
    position: relative;
    text-align: left;
    outline: none;
    padding-right: 14px;
  }
  
  .custom-select .selected {
    color: rgba(31, 32, 32, 1);
    cursor: pointer;
    user-select: none;
  }

  
  .custom-select .selected:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top:5px;
    right: 0;
    border: 5px solid transparent;
    border-color: rgb(31, 32, 32) transparent transparent transparent;
  }

   .items {
    position: sticky;
    float: right;
    overflow: hidden;
    background-color: #ffffff;
    z-index: 1;
    justify-content: end;
    width: 280px;
  }
  
  .custom-select .items div {
    color: rgb(31, 32, 32);
    padding: 17px 0 16px 24px;
    cursor: pointer;
    user-select: none;

  }
  
  .custom-select .items div:hover {
    background-color: rgba(123, 184, 153, 1);
  }
  
  .selectHide {
    display: none;
  }

  </style>