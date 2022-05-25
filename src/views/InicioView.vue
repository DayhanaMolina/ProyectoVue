<template>
  <div>
    <HelloWorld/>
    <CualquierDetalle/>
    <ImagenTexto/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CualquierDetalle from '@/components/CualquierDetalle.vue';
import ImagenTexto from '@/components/ImagenTexto.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CualquierDetalle,
    ImagenTexto
},
}
</script>

<style>


  
 </style>

