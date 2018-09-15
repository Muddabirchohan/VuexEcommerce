<template> 
<div> 
  <div v-for="pro in cart" v-bind:key="pro">  
         <p> <img :src="'https://greencommunitylaundry.herokuapp.com/api/Images/' + pro.image"  width="270px"/>  </p>    
         <p> {{pro._id}} </p> 
         <p> {{pro.name}} </p> 
         <p> {{pro.price}} </p>
 </div>
    </div> 
</template>

<script>
export default { 
  computed: {
    cart() {
      return this.$store.getters.cart;
      console.log(this.$store.getters.cart);
    }
  }
};
</script>