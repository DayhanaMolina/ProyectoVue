<template>
    <div>
       <PrimerComp/>
       <EspecialDetalles/>
       <PrimerVar/>
  </div>
</template>

<script>
import PrimerComp from "./components/PrimerComp.vue";
import EspecialDetalles from "./components/EspecialDetalles.vue";
import PrimerVar from "./components/PrimerVar.vue";

export default({
  components: {
    PrimerComp,
    EspecialDetalles,
    PrimerVar
  },
})
</script>

<style scoped>

nav .hola {
    background-color: white;
    justify-content: flex-start;
    border-radius: 30px;
    padding: 20px;
    margin:0px 0px;
    font-size: 1.5rem;
    text-decoration: none;
}
nav a {
  font-weight: bold;
  text-decoration: none;
  background-color: #a84698;
}
nav a.router-link-exact-active {
  color: rgb(5, 25, 85);
}

</style>

