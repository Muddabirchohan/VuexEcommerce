<template> 
<div> 

<div v-for="desc in description" v-bind:key="desc">  
  
         <p> {{desc._id}} </p> 
         <p> {{desc.name}} </p> 
         <p> {{desc.price}} </p>
 </div>


    </div> 
</template>

<script>
export default {
 
 computed: {
    description() {
      return this.$store.getters.description;
      console.log(this.$store.getters.description);
    }
  }
};
</script>