<template> 
<div> 
    <div v-for="pro in products.data" class="flex-container" v-bind:key="pro.key">      
      
      <div>
          <b-card 
          
           style="max-width: 20rem;"
          img-alt="Image" 
          img-top >
      <p>
     {{pro._id}}  
     <img :src="'https://greencommunitylaundry.herokuapp.com/api/Images/' + pro.image"  width="270px"/> 
     </p>
     <div class="moveLeft">
     <b-button v-on:click="addData(pro)"> Add </b-button>
     <b-button v-on:click="ShowDesc(pro)"> Description </b-button>
     </div>
     </b-card>
</div>

 </div>
</div>

</template>
<script>
export default {
  created() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
  addData(obj){
         this.$store.dispatch("addToCart",obj);
  },

  ShowDesc(obj){
 this.$store.dispatch("showDesc",obj);
  }
},
 computed: {
    products() {
      return this.$store.getters.products;
      console.log(this.$store.getters.products);
    }
  }
};
</script>



<style>
.flex-container {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-content: center;
  background-color: lightgray;
}

.flex-container div {
  justify-content: center;
}

.flex-container > div {
  margin-top: 50px;
}

.moveLeft {
  margin-left: 50px;
}

</style>