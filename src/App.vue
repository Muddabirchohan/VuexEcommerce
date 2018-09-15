<template>
  <div id="app">
<Navbar> </Navbar>
<Products > </Products>
<Cart> </Cart>
<Description> </Description>
  </div>
</template>


<script>
import Products from './components/Products.vue';
import Navbar from './components/Navbar.vue';
import Cart from './components/Cart.vue';
import Description from './components/Description.vue';

export default {
 
  components: {
   Navbar,
   Products,
   Cart,
   Description
  }
}

</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
